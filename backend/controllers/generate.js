const OpenAI = require('openai');

// Initialize the OpenAI client using the API key from the environment.
const openai = new OpenAI(process.env.OPENAI_API_KEY);

/**
 * Generate text from a user prompt using OpenAI's chat completion API.
 * Requires the request body to contain a `prompt` string. Returns the
 * generated content in the response body.
 */
exports.generateText = async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
    });
    const output = response.choices?.[0]?.message?.content;
    res.json({ output });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'AI generation error' });
  }
};

/**
 * Generate an image from a text prompt using OpenAI's image API. Requires
 * the request body to contain a `prompt` string. Returns the image URL.
 */
exports.generateImage = async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await openai.images.generate({
      prompt,
      n: 1,
      size: '1024x1024',
    });
    const imageUrl = response.data?.[0]?.url;
    res.json({ imageUrl });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'AI generation error' });
  }
};
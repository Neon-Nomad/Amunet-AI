import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { router as apiRouter } from './routes.js';

const app = express();

const corsOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',').map((s) => s.trim())
  : '*';

app.use(helmet());
app.use(cors({ origin: corsOrigins }));
app.use(express.json());

app.get('/healthz', (req, res) => {
  res.json({ ok: true });
});

app.use('/api', apiRouter);

const port = Number(process.env.PORT || 8787);
app.listen(port, () => {
  console.log(`[server] listening on http://localhost:${port}`);
});

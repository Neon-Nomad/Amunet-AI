import { useState, useEffect } from 'react';

export default function TypewriterTerminal() {
  const [text, setText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const initText = '// Initializing Amunet AI Systems...';
  const completeText = '// All Systems Go.';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= initText.length) {
        setText(initText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        // Wait 500ms then show "All Systems Go"
        setTimeout(() => {
          setIsComplete(true);
          setText(completeText);
        }, 500);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-mono text-sm md:text-base text-cyan-400 bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-cyan-500/30 shadow-lg">
      <div className="flex items-center space-x-2 mb-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="h-6 flex items-center">
        {text}
        {!isComplete && <span className="inline-block w-2 h-5 bg-cyan-400 ml-1 animate-pulse"></span>}
      </div>
    </div>
  );
}

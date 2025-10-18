import { useEffect, useState } from 'react';

export default function DOSBootLoader() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const lines = [
    "C:\\> Initializing Amunet AI Systems...",
    "C:\\> Connecting Neural Nodes...",
    "C:\\> Loading Automation Protocols...",
    "C:\\> All Systems Go.",
    "",
    "C:\\> Knock Knock."
  ];

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      return;
    }

    const currentLine = lines[currentLineIndex];

    if (currentCharIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + currentLine[currentCharIndex]);
        setCurrentCharIndex(currentCharIndex + 1);
      }, 20);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + '\n');
        setCurrentLineIndex(currentLineIndex + 1);
        setCurrentCharIndex(0);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [currentCharIndex, currentLineIndex]);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="crt-container">
        <div className="crt-screen">
          <div className="console-output">
            <pre className="text-left whitespace-pre-wrap">
              {displayedText}
              <span className="cursor-blink">_</span>
            </pre>
          </div>
        </div>
      </div>

      <style>{`
        .crt-container {
          position: relative;
          width: 100%;
          background: #000;
          border: 3px solid #a855f7;
          border-radius: 8px;
          padding: 20px;
          box-shadow:
            0 0 20px rgba(168, 85, 247, 0.5),
            inset 0 0 50px rgba(168, 85, 247, 0.1);
          overflow: hidden;
        }

        .crt-screen {
          position: relative;
          min-height: 200px;
          color: #a855f7;
          font-family: 'Courier New', monospace;
          font-size: 14px;
          line-height: 1.6;
        }

        .crt-screen::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            rgba(168, 85, 247, 0.03) 0px,
            rgba(168, 85, 247, 0.03) 1px,
            transparent 1px,
            transparent 2px
          );
          pointer-events: none;
          animation: scanline 8s linear infinite;
        }

        @keyframes scanline {
          0% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }

        .console-output {
          position: relative;
          z-index: 1;
        }

        .cursor-blink {
          animation: blink 0.8s infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          50.1%, 100% { opacity: 0; }
        }

        .crt-container {
          animation: flicker 3s infinite;
        }

        @keyframes flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
            opacity: 1;
          }
          20%, 24%, 55% {
            opacity: 0.95;
          }
        }
      `}</style>
    </div>
  );
}

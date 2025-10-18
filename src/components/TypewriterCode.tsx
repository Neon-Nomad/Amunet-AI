import { useEffect, useMemo, useState } from 'react';

export default function TypewriterCode() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const codeLines = useMemo(
    () => [
      { num: '1', code: 'function handleCustomerInquiry() {' },
      { num: '2', code: '  earnest.listen();' },
      { num: '3', code: '  earnest.respond();' },
      { num: '4', code: '  earnest.bookAppointment();' },
      { num: '5', code: '  // All while you sleep' },
      { num: '6', code: '}' },
    ],
    []
  );

  useEffect(() => {
    if (currentLineIndex >= codeLines.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLineIndex(0);
        setCurrentCharIndex(0);
      }, 3000);
      return () => clearTimeout(timeout);
    }

    const currentLine = codeLines[currentLineIndex].code;

    if (currentCharIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => {
          const newLines = [...prev];
          if (!newLines[currentLineIndex]) {
            newLines[currentLineIndex] = '';
          }
          newLines[currentLineIndex] += currentLine[currentCharIndex];
          return newLines;
        });
        setCurrentCharIndex(currentCharIndex + 1);
      }, 40);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLineIndex(currentLineIndex + 1);
        setCurrentCharIndex(0);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [currentCharIndex, currentLineIndex, codeLines]);

  const renderLine = (line: string, index: number) => {
    const lineNum = codeLines[index]?.num || '';

    if (line.includes('function')) {
      const parts = line.split('function');
      return (
        <p className="flex items-center">
          <span className="text-gray-500 mr-4">{lineNum}</span>
          <span>
            {parts[0]}
            <span className="text-neon-purple-400">function</span>
            {parts[1]}
          </span>
        </p>
      );
    }

    if (line.includes('earnest.')) {
      const parts = line.split(/(\w+)\(/);
      return (
        <p className="flex items-center">
          <span className="text-gray-500 mr-4">{lineNum}</span>
          <span className="ml-6">
            earnest.
            <span className="text-yellow-400">{parts[1]}</span>
            {parts[2]}
          </span>
        </p>
      );
    }

    if (line.includes('//')) {
      return (
        <p className="flex items-center">
          <span className="text-gray-500 mr-4">{lineNum}</span>
          <span className="ml-6 text-purple-400">{line.trim()}</span>
        </p>
      );
    }

    return (
      <p className="flex items-center">
        <span className="text-gray-500 mr-4">{lineNum}</span>
        <span>{line}</span>
      </p>
    );
  };

  return (
    <div className="space-y-3 text-green-400 font-mono text-sm">
      {displayedLines.map((line, index) => (
        <div key={index}>
          {renderLine(line, index)}
        </div>
      ))}
      {currentLineIndex < codeLines.length && (
        <p className="flex items-center">
          <span className="text-gray-500 mr-4">{codeLines[currentLineIndex]?.num}</span>
          <span className="cursor-blink">_</span>
        </p>
      )}

      <style>{`
        .cursor-blink {
          animation: blink 0.8s infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          50.1%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}

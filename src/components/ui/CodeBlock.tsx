
import React from 'react';

interface CodeBlockProps {
  language?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  language = 'javascript', 
  title, 
  children,
  className = ''
}) => {
  return (
    <div className={`code-block rounded-lg overflow-hidden shadow-lg border border-gray-700 ${className}`}>
      <div className="flex items-center justify-between bg-gray-900 px-4 py-2 border-b border-gray-700">
        <div className="flex items-center">
          <div className="flex space-x-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          {title && <span className="text-sm text-gray-400 font-mono">{title}</span>}
        </div>
        <span className="text-xs px-2 py-1 rounded-md bg-gray-800 text-gray-400 font-mono">{language}</span>
      </div>
      <div className="bg-gray-950 p-4 overflow-auto font-mono text-sm text-gray-300">
        {children}
      </div>
    </div>
  );
};

export default CodeBlock;

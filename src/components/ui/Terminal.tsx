
import React from 'react';

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const Terminal: React.FC<TerminalProps> = ({ 
  children, 
  className = '',
  title = 'terminal'
}) => {
  return (
    <div className={`terminal rounded-lg overflow-hidden shadow-lg border border-gray-700 ${className}`}>
      <div className="flex items-center bg-gray-900 px-4 py-2 border-b border-gray-700">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-sm text-gray-400 font-mono">~ {title}</span>
      </div>
      <div className="bg-gray-950 p-4 font-mono text-sm">
        <div className="flex flex-col space-y-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export const TerminalLine: React.FC<{
  prefix?: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ 
  prefix = '$', 
  children,
  className = '',
  delay = 0
}) => {
  return (
    <div 
      className={`terminal-line flex ${className}`}
      style={{ 
        animationDelay: `${delay}ms`,
        animationDuration: '300ms',
        animationFillMode: 'both',
        animationName: 'fadeInUp'
      }}
    >
      <span className="text-green-400 mr-2">{prefix}</span>
      <span className="text-gray-300">{children}</span>
    </div>
  );
};

export default Terminal;

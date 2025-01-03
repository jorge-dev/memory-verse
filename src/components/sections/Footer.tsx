import React from "react";

interface FooterProps {
  message: string;
  signature: string;
}

export function Footer({ message, signature }: FooterProps) {
  return (
    <footer className="py-12 bg-gray-400/30 dark:bg-gray-800/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4 max-w-xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-300 italic font-serif">
            {message}
          </p>
          <p className="text-gray-800 dark:text-gray-200 font-serif">
            {signature}
          </p>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-6">
            ❤️
          </div>
        </div>
      </div>
    </footer>
  );
}

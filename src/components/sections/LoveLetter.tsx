import React from 'react';

interface LoveLetterProps {
  content: string;
  signature: string;
  date?: string;
}

export function LoveLetter({ content, signature, date }: LoveLetterProps) {
  return (
    <section className="py-20 bg-pink-50/50 dark:bg-gray-800/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 md:p-12 rounded-lg shadow-lg">
          <h2 className="text-3xl font-serif text-center mb-8 text-gray-800 dark:text-gray-100">
            My Love Letter to You
          </h2>
          <div className="space-y-4 font-serif">
            {content.split('\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-8 text-right">
            <p className="text-gray-600 dark:text-gray-400 italic mb-2">{date}</p>
            <p className="text-xl font-serif text-gray-800 dark:text-gray-200">{signature}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

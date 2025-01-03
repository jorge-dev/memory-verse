import React from "react";

interface LoveLetterProps {
  content: string;
  signature: string;
  date?: string;
}

const loveLetter = {
  content: `My Dearest Love, ❤️

As I sit to write this, my heart overflows with gratitude and joy as I think about that mission trip back in 2011. I remember the exact moment I saw you on that bus, laughing with your friend. Little did I know that God was setting the stage for a story far more beautiful than I could have imagined.

That second week, when we began to truly talk, remains one of my most cherished memories. The way we connected while serving others was just the beginning of something extraordinary. Who could have foreseen that those simple moments would lead us to this incredible life together?

I will never forget the day we stood together in 2015, on that mountain in Copán, exchanging vows. The beauty of the view paled in comparison to the beauty of your presence in that moment. It was not just a promise—it was the beginning of a journey that has blessed me in ways words can barely express.

Since then, our lives have been enriched by the arrival of our three beautiful daughters—our joyful 2018 miracle, our curious 2020 adventurer, and our sweet 2022 light. Watching you as their mother has revealed a depth of love and strength in you that amazes me every single day. The warmth and care you pour into our family have made our house a home filled with love and laughter.

Every moment with you—whether it’s bedtime stories with the girls, chaotic breakfast mornings, or quiet evenings on the couch—is a treasure I hold close. You make the ordinary extraordinary and turn every day into a blessing.

As I look to the future, my heart is filled with anticipation for the adventures and milestones that await us. With you by my side, I know that every step of the journey will be full of love and meaning.
`,
  signature: "Forever Yours,\nJorge",
  date: new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  }),
};

export function LoveLetter() {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white/50 dark:bg-gray-800/50 p-8 md:p-12 rounded-lg shadow-lg">
          <h2 className="text-3xl font-serif text-center mb-8 text-gray-800 dark:text-gray-100">
            My Love Letter to You
          </h2>
          <div className="space-y-4 font-serif">
            {loveLetter.content.split("\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-8 text-right">
            <p className="text-gray-600 dark:text-gray-400 italic mb-2">
              {loveLetter.date}
            </p>
            <p className="text-xl font-serif text-gray-800 dark:text-gray-200">
              {loveLetter.signature}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

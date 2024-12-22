import Image from "next/image";
import { ModeToggle } from "@/components/dark-mode-toggle";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4 relative">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
          Under Construction
        </h1>
        <div className="relative w-64 h-64 mx-auto mb-4">
          <Image
            src="/construction.png"
            alt="Under Construction"
            fill
            priority
            className="object-contain"
          />
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto">
          We&apos;re working hard to bring you something amazing. Please check back soon!
        </p>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Expected launch: Coming Soon
        </div>
      </div>
    </main>
  );
}

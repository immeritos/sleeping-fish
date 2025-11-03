"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - After Navigation */}
      <section className="h-[calc(100vh-3.5rem)] h-[calc(100dvh-3.5rem)] mt-14 grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 px-4 pb-4">
        {/* Left Side - Static circular text panel */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="rounded-full w-44 h-44 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-[#FEFCE9] dark:bg-[#1F2D5C] p-4 sm:p-6 md:p-8 flex flex-col shadow-sm overflow-hidden">
            <div className="flex-1 flex items-center justify-center">
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-center" style={{ fontSize: '10px' }}>
                welcome ~
              </p>
            </div>
            <div className="flex items-end justify-center">
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-center max-w-[14rem] sm:max-w-[16rem] md:max-w-[18rem]" style={{ fontSize: '10px' }}>
                This is where I put the things I&apos;m working on, the thoughts I&apos;m exploring, and the moments I would like to remember.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Static circular image (keep round shape) */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="rounded-full overflow-hidden w-44 h-44 sm:w-60 sm:h-60 md:w-80 md:h-80 shadow-sm">
            <Image
              src="/hero1.jpg"
              alt="Hero Image"
              width={800}
              height={800}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
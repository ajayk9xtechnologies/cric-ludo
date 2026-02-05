"use client";
import { mobileWithGameTwo } from "@/app/common";
import Image from "next/image";

export default function AppFeatures() {
  return (
    <section className="relative pt-32 pb-20 bg-white">
     
      <div className="container mx-auto px-4">
         
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            App Features
          </h2>
        </div>
 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Column - Phone Images */}
          <div className="relative flex justify-center lg:justify-end gap-6">
            <Image
              src={mobileWithGameTwo}
              alt="Cricket Mode Screen"
              width={280}
              height={560}
              className="drop-shadow-2xl"
            />
            <Image
              src={mobileWithGameTwo}
              alt="Ludo Mode Screen"
              width={280}
              height={560}
              className="drop-shadow-2xl"
            />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            {/* Orange heading */}
            <h3 className="text-2xl md:text-3xl font-bold" style={{ color: '#FF6B35' }}>
              India s No.1 Game!
            </h3>

            {/* Description */}
            <p className="text-gray-700 text-lg leading-relaxed">
              Cric Ludo, The Popular Ludo Game, Is A Digital Adaptation Of The Classic Ludo Board Game Available On Mobile. It Offers Online And Offline Multiplayer Modes With Many Features For Nonstop Entertainment. With Its Colorful Design, Engaging Gameplay, And Nostalgic Appeal, Cric Ludo Has Become One Of The Top Downloaded Games Worldwide.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#" 
                className="transition-transform hover:scale-105"
                aria-label="Download on App Store"
              >
                <Image
                  src={mobileWithGameTwo}
                  alt="Download on App Store"
                  width={150}
                  height={50}
                  className="h-12 w-auto"
                />
              </a>
              <a 
                href="#" 
                className="transition-transform hover:scale-105"
                aria-label="Get it on Google Play"
              >
                <Image
                  src={mobileWithGameTwo}
                  alt="Get it on Google Play"
                  width={150}
                  height={50}
                  className="h-12 w-auto"
                />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
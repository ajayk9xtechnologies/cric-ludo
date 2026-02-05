"use client";
import { mobileWithGameOne,mobileWithGameTwo ,mobileWithGameThree} from "@/app/common";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AppFeatures() {
    const slides = [
    { id: 1, title: "Feature One", img: mobileWithGameOne },
    { id: 2, title: "Feature Two", img: mobileWithGameTwo },
    { id: 3, title: "Feature Three", img: mobileWithGameThree },
  ];
    const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const containerRef = useRef(null);
  const slideRefs = useRef([]);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  // Optional: pause auto-advance when user interacts
  useEffect(() => {
    // Auto-advance every 5s on non-mobile if you want; currently disabled
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div className="py-10">
      <div className="flex flex-row">
        <div className="basis-1/3">01</div>
        <div className="basis-2/3">
            <div className="relative">
          {/* Slides: only one visible at a time on mobile */}
          <div className="overflow-hidden">
            {slides.map((s, i) => (
              <div
                key={s.id}
                className={`transition-opacity duration-500 ${i === index ? "block" : "hidden"}`}>
                <Image
                  src={s.img}
                  alt={s.title}
                  width={50}
                  height={50}
                  className=""
                />
                <div className="mt-3 text-center font-bold text-lg">{s.title}</div>
              </div>
            ))}
          </div>

          {/* Prev / Next - visible on mobile (md:hidden) */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow md:hidden"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow md:hidden"
          >
            ›
          </button>

          {/* Dots + counter */}
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="text-sm text-gray-600">{index + 1}/{slides.length}</div>
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-2 h-2 rounded-full ${i === index ? "bg-blue-600" : "bg-gray-300"}`}
                />
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    
  );
}
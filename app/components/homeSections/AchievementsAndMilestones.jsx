"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import {
  mobileWithGameOne,
  mobileWithGameTwo,
  mobileWithGameThree,
  cricludo,
  dice,
} from "@/app/common";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AuroraText } from "../ui/aurora-text";

gsap.registerPlugin(ScrollTrigger);

export default function AchievementsAndMilestones() {
  const containerRef = useRef(null);
  const phonesContainerRef = useRef(null);
  const centerPhoneRef = useRef(null);
  const leftPhoneRef = useRef(null);
  const rightPhoneRef = useRef(null);
  const textSectionRef = useRef(null);
  const boardRef = useRef(null); // Ref for 3D Tilt

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // ✅ Mobile (<= 640px)
        "(max-width: 640px)": () => {
          gsap.set(centerPhoneRef.current, { opacity: 1, scale: 1, y: 0 });
          gsap.set(leftPhoneRef.current, {
            opacity: 0,
            x: -30,
            scale: 0.9,
            rotate: -5,
          });
          gsap.set(rightPhoneRef.current, {
            opacity: 0,
            x: 30,
            scale: 0.9,
            rotate: 5,
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: phonesContainerRef.current,
              start: "top top",
              end: "+=500",
              scrub: 1,
              pin: true,
              anticipatePin: 1,
            },
          });

          tl.to(leftPhoneRef.current, {
            opacity: 1,
            x: -60,
            scale: 0.85,
            duration: 1,
            ease: "power2.out",
          }).to(
            rightPhoneRef.current,
            {
              opacity: 1,
              x: 60,
              scale: 0.85,
              duration: 1,
              ease: "power2.out",
            },
            "<",
          );
        },

        // ✅ Tablet (641px–1023px)
        "(min-width: 641px) and (max-width: 1023px)": () => {
          gsap.set(centerPhoneRef.current, { opacity: 1, scale: 1, y: 0 });
          gsap.set(leftPhoneRef.current, { opacity: 0, x: -50, scale: 0.9 });
          gsap.set(rightPhoneRef.current, { opacity: 0, x: 50, scale: 0.9 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: phonesContainerRef.current,
              start: "top top",
              end: "+=600",
              scrub: 1,
              pin: true,
              anticipatePin: 1,
            },
          });

          tl.to(leftPhoneRef.current, {
            opacity: 1,
            x: -140,
            scale: 0.9,
            duration: 1,
            ease: "power2.out",
          }).to(
            rightPhoneRef.current,
            {
              opacity: 1,
              x: 140,
              scale: 0.9,
              duration: 1,
              ease: "power2.out",
            },
            "<",
          );
        },

        // ✅ Desktop (>= 1024px)
        "(min-width: 1024px)": () => {
          gsap.set(centerPhoneRef.current, { opacity: 1, scale: 1, y: 0 });
          gsap.set(leftPhoneRef.current, { opacity: 0, x: -60, scale: 0.9 });
          gsap.set(rightPhoneRef.current, { opacity: 0, x: 60, scale: 0.9 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: phonesContainerRef.current,
              start: "top top",
              end: "+=800",
              scrub: 1,
              pin: true,
              anticipatePin: 1,
            },
          });

          tl.to(leftPhoneRef.current, {
            opacity: 1,
            x: -280,
            scale: 1,
            duration: 1,
            ease: "power2.out",
          }).to(
            rightPhoneRef.current,
            {
              opacity: 1,
              x: 280,
              scale: 1,
              duration: 1,
              ease: "power2.out",
            },
            "<",
          );
        },
      });
    }, phonesContainerRef);

    return () => ctx.revert();
  }, []);

  // 3D Tilt Effect Handlers
  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    const x = clientX - left;
    const y = clientY - top;

    // Calculate rotation (-20 to 20 degrees)
    const xRot = (y / height - 0.5) * -30; // Rotate X based on Y position (inverted)
    const yRot = (x / width - 0.5) * 30; // Rotate Y based on X position

    gsap.to(boardRef.current, {
      rotationX: xRot,
      rotationY: yRot,
      scale: 1.1,
      transformPerspective: 1000,
      ease: "power2.out",
      duration: 0.5,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(boardRef.current, {
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      ease: "power2.out",
      duration: 0.5,
    });
  };

  const features = [
    {
      title: "Highly Rated Gameplay",
      description:
        "Players Appreciate Cricludo For Its Unique Concept, Smooth Gameplay, And Perfect Blend Of Cricket And Ludo.",
    },
    {
      title: "A Unique Gaming Concept",
      description:
        "Cricludo Stands Out As A One Of A Kind Game Where Cricket Strategy Meets Board Game Fun",
    },
    {
      title: "Continuous Improvements",
      description:
        "Regular Updates, New Features, And Performance Enhancements Keep The Game Fresh And Engaging.",
    },
    {
      title: "Thousands Of Matches Played",
      description:
        "From Quick Fun Games To Intense Strategic Battles, Cricludo Has Already Powered Thousands Of Exciting Matches.",
    },
    {
      title: "Growing Community",
      description:
        "Loved By Players Across All Age Groups, Cricludo Is Building A Strong And Passionate Gaming Community Every Day.",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-white overflow-hidden flex flex-col items-center"
    >
      {/* SECTION 1: Phones Animation Area */}
      <div
        ref={phonesContainerRef}
        className="relative w-full h-[60vh] sm:h-[70vh] md:h-[90vh] flex items-center justify-center py-10"
      >
        <div className="relative w-full max-w-7xl h-full flex items-center justify-center">
          {/* Left Phone */}
          <div
            ref={leftPhoneRef}
            className="absolute z-10 w-[42%] max-w-[200px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[240px] xl:max-w-[300px] 2xl:max-w-[350px]"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Image
              src={mobileWithGameTwo}
              alt="Left Screen"
              width={200}
              height={400}
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Right Phone */}
          <div
            ref={rightPhoneRef}
            className="absolute z-10 w-[42%] max-w-[200px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[240px] xl:max-w-[300px] 2xl:max-w-[350px]"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Image
              src={mobileWithGameThree}
              alt="Right Screen"
              width={200}
              height={400}
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Center Phone */}
          <div
            ref={centerPhoneRef}
            className="absolute z-20 w-[48%] max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[280px] xl:max-w-[320px] 2xl:max-w-[400px]"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Image
              src={mobileWithGameOne}
              alt="Center Screen"
              width={220}
              height={440}
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* SECTION 2: Achievements Grid */}
      <div
        ref={textSectionRef}
        className="w-full bg-white py-16 px-4 md:px-10 z-30"
      >
        <div className="mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#333333] font-[var(--font-lalezar)]">
              Achievements & Milestones
            </h2>
            {/* 3D Tilt Container */}
            <div
              className="container flex justify-center mx-auto mt-8 cursor-pointer perspective-1000"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div
                ref={boardRef}
                className=" relative tranform-style-3d"
              >
                <Image
                  src={cricludo}
                  alt="Ludo Board"
                  width={300} height={300}
                  className="object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {features.map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                {/* Icon */}
                <div className="flex-shrink-0 relative mt-1">
                  <Image src={dice} alt="icon" width={60} height={60} />
                </div>
                {/* Text */}
                <div className="space-y-2">
                  <h2 className="font_one font-bold">
                    <AuroraText>{item.title}</AuroraText>
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed font-[var(--font-dm-sans)]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dotted Line Divider (Bottom) */}
      <div className="w-full border-b-[3px] border-dotted border-[#60A5FA] mt-10"></div>
    </div>
  );
}

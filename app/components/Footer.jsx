import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
// Importing assets from common if available, otherwise using direct paths or placeholders
import { FooterBg } from "../common";
// We need to import the logo. Based on file list it is "png logo 1.png" in assets/images
import Logo from "../assets/images/png logo 1.png";

const Footer = () => {
  return (
    <footer className={`${styles.footerBg} relative w-full pt-16 overflow-hidden`}>
      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">

        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Image
            src={Logo}
            alt="Cric Ludo Logo"
            width={180}
            height={180}
            className="object-contain" // w-[150px] md:w-[200px] can be added if needed
          />
        </div>

        {/* Center: Download Section */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-3xl md:text-4xl font-black text-[#D9381E] drop-shadow-sm mb-6 uppercase tracking-wide" style={{ textShadow: "2px 2px 0px #F9B626, -1px -1px 0 #fff" }}>
            Download Now!
          </h3>
          <div className="flex gap-4">
            <Link href="https://apps.apple.com/in/app/cricludo/id6741326528" target="_blank" className="transition-transform hover:scale-105">
              <img
                src="https://placehold.co/160x50/000000/ffffff?text=App+Store"
                alt="Available on the App Store"
                className="h-12 w-auto rounded-lg"
              />
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=com.nineXTechnology.CricLudo&pli=1" target="_blank" className="transition-transform hover:scale-105">
              <img
                src="https://placehold.co/160x50/000000/ffffff?text=Google+Play"
                alt="Get it on Google Play"
                className="h-12 w-auto rounded-lg"
              />
            </Link>
          </div>

          {/* Navigation Links - Centered below download or separate? The design has them below or part of flow. 
               Let's put them below the download buttons for mobile, or in a row for desktop. 
               Looking at the image, there are links like Home, About us etc. below the central area.
           */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm md:text-base font-medium text-gray-900">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-white transition-colors">About us</Link>
            <Link href="/features" className="hover:text-white transition-colors">App features</Link>
            <Link href="/achievements" className="hover:text-white transition-colors">Achievements & Milestones</Link>
          </div>
          <div className="mt-2 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-gray-800">
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/cookie" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4">
          {/* Demo paths for social icons */}
          {['youtube', 'instagram', 'facebook', 'twitter'].map((social) => (
            <Link key={social} href={`#${social}`} className={`${styles.socialIcon} bg-[#1a103c] p-3 rounded-full flex items-center justify-center text-white hover:bg-opacity-90`}>
              {/* Using placeholder for icons - replaced with simple text letter or generic shape if needed, 
                        but let's try to use a simple img placeholder or just a colored div with initial for now if no assets. 
                        Actually, I can use a simple SVG or just the placeholder image. 
                    */}
              <img src={`https://placehold.co/24/1a103c/ffffff?text=${social[0].toUpperCase()}`} alt={social} className="w-5 h-5" />
            </Link>
          ))}
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full bg-[#1a103c] text-white py-4 mt-12 text-center text-xs md:text-sm">
        <p>© 2026 Cric Ludo Studios. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

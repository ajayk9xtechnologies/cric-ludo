"use client";
import React, { useEffect } from "react";


import Image from "next/image";
import Link from "next/link";

export default function Download() {
    useEffect(() => {
        // Device detection logic
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        const mobileCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

        if (mobileCheck) {
            if (/android/i.test(userAgent)) {
                // Redirect to Google Play Store
                window.location.href = "https://play.google.com/store/apps/details?id=com.nineXTechnology.CricLudo&pli=1";
            } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                // Redirect to Apple App Store
                window.location.href = "https://apps.apple.com/in/app/cricludo/id6741326528";
            }
        } else {
            // Desktop handling
            console.log("Desktop user detected. Showing download landing page.");
        }
    }, []);

    // Demo image URLs as requested
    const phonesImg = "https://placehold.co/600x600/png?text=Phones+Mockup";
    const logoImg = "https://placehold.co/150x150/png?text=Logo";
    const googlePlayImg = "https://placehold.co/200x60/000/fff?text=Google+Play";
    const appStoreImg = "https://placehold.co/200x60/000/fff?text=App+Store";

    return (
        <div className="min-h-screen bg-white flex flex-col justify-between">
            {/* Main Section */}
            <section className="flex-grow flex items-center justify-center py-10 md:py-0">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-center h-full min-h-[60vh] md:min-h-[80vh] gap-8">

                        {/* Phones Image - Hidden on Mobile, Visible on Desktop */}
                        <div className="hidden md:block w-full md:w-1/2 text-center">
                            <img
                                src={phonesImg}
                                alt="App Interface"
                                className="img-fluid max-w-full h-auto mx-auto object-contain p-4"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="w-full md:w-1/2 text-center">
                            <p className="text-gray-600 font-bold mb-6 text-lg md:text-xl">
                                Download App to Use All Features
                            </p>

                            <div className="flex flex-col items-center justify-center">
                                <div className="w-10/12 md:w-8/12">
                                    <Link href="/">
                                        <img src={logoImg} alt="Logo" className="w-32 h-32 object-contain mx-auto mb-6" />
                                    </Link>

                                    <div className="flex flex-col gap-4 mt-4 items-center">
                                        <Link href="https://play.google.com/store/apps/details?id=com.nineXTechnology.CricLudo&pli=1" target="_blank">
                                            <img src={googlePlayImg} alt="Google Play Store" className="h-14 w-auto" />
                                        </Link>
                                        <Link href="https://apps.apple.com/in/app/cricludo/id6741326528" target="_blank">
                                            <img src={appStoreImg} alt="Apple App Store" className="h-14 w-auto" />
                                        </Link>

                                        <Link href="/" className="text-2xl font-semibold text-gray-800 hover:text-blue-600 no-underline mt-2">
                                            cricludo.com
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </div>
    );
}
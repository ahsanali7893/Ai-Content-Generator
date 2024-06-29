import React, { useEffect } from "react";
import HomeHeader from "./HomeHeader";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <HomeHeader />

      <div className="absolute inset-0 -z-10 h-screen w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <div className="relative container mx-auto px-6 text-center md:px-12 lg:px-20 pt-9">
          <h1 className="text-5xl font-extrabold text-gray-400 sm:text-6xl">
            AI Content Manager
          </h1>
          <h2 className="mt-4 text-4xl font-extrabold text-gray-500 sm:text-5xl">
            Welcome to Our Service
          </h2>
          <p className="mt-5 text-xl text-gray-600 sm:text-2xl">
            Discover the best way to manage your tasks and projects with our
            powerful tools and features.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/sign-in"
              className="flex px-8 py-3 text-lg font-medium text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 shadow-lg transform transition duration-300 hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";
import { useUser } from "@clerk/nextjs";
import { LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function HomeHeader() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      // Redirect to dashboard if the user is logged in
      router.push("/dashboard");
    }
  }, [user]);

  return (
    <div className="flex justify-between p-5 items-center border-b-[0.5px] border-white">
      <div>
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
      </div>
      <div className="flex items-center">
        <div className="border-l-4 h-10 mr-5 "></div>
        <Link
          href={"/sign-in"}
          className="bg-slate-100 text-primary px-3 py-2 rounded-lg flex gap-2 shadow-lg transform transition duration-300 hover:scale-105"
        >
          <LogIn />
          Get Started
        </Link>
      </div>
    </div>
  );
}

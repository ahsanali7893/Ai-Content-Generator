"use client";
import {
  History,
  Home,
  IndentIncrease,
  Settings,
  WalletCards,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import UsageTrack from "./UsageTrack";
import Link from "next/link";

export default function SideBar() {
  const [sideBar, setSideBar] = useState(false);
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: History,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/setting",
    },
  ];
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className="relative">
      <button
        className={`md:hidden fixed bottom-24 left-7  z-50 p-2  bg-gray-800 text-white rounded-full transition-transform duration-300 ease-in-out ${
          sideBar ? "translate-x-60 rotate-90" : "-translate-x-7"
        }`}
        onClick={() => setSideBar(!sideBar)}
      >
        <IndentIncrease className="h-6 w-6" />
      </button>
      <div
        className={`h-screen w-64  fixed top-0 left-0 p-5 shadow-sm border bg-white transition-transform duration-300 ease-in-out transform ${
          sideBar ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0`}
      >
        <div className="flex justify-center">
          <Image src="/logo.svg" alt="logo" width={50} height={50} />
        </div>
        <hr className="my-6 border" />
        <div className="mt-5">
          {MenuList.map((menu, index) => (
            <Link
              href={menu.path}
              key={index}
              className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${
                path == menu.path && "bg-primary text-white"
              }`}
              onClick={() => setSideBar(sideBar)}
            >
              <menu.icon className="h-6 w-6" />
              <h2 className="text-lg">{menu.name}</h2>
            </Link>
          ))}
        </div>
        <div className="absolute bottom-10 left-0 w-full">
          <UsageTrack />
        </div>
      </div>
    </div>
  );
}

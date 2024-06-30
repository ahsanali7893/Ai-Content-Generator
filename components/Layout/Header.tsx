import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <div className="p-5 shadow-sm border-b-2 flex justify-between items-center">
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-md">
        <Search />
        <input type="text" placeholder="search..." className="outline-none" />
      </div>
      <div className="flex gap-5 items-center">
        <h2 className="bg-primary rounded-full hidden sm:block  text-sm text-white px-2">
          🔥Join Membership for $1.99/Month
        </h2>
        <UserButton />
      </div>
    </div>
  );
}

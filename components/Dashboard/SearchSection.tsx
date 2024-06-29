import { SearchIcon } from "lucide-react";
import React from "react";

export default function SearchSection({ onSearchInput }: any) {
  return (
    <div className="p-10 bg-gradient-to-br from-primary to-gray-500 flex flex-col justify-center items-center text-white">
      <h2 className="text-3xl font-bold ">Browse All Templates</h2>
      <p>What would you like to create today?</p>
      <div className="w-full flex justify-center">
        <div className="flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[50%]">
          <SearchIcon className="text-primary" />
          <input
            type="text"
            placeholder="Search...."
            className="bg-transparent text-primary w-full outline-none"
            onChange={(event) => onSearchInput(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

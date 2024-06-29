"use client";
import SearchSection from "@/components/Dashboard/SearchSection";
import TempletlistSection from "@/components/Dashboard/TempletlistSection";
import React, { useState } from "react";

export default function Dashboard() {
  const [userSearchInput, setUserSearchInput] = useState<string>();
  return (
    <div>
      <SearchSection
        onSearchInput={(value: string) => setUserSearchInput(value)}
      />
      <TempletlistSection userSearchInput={userSearchInput} />
    </div>
  );
}

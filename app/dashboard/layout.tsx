"use client";
import Header from "@/components/Layout/Header";
import SideBar from "@/components/Layout/SideBar";
import React, { useState } from "react";
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import { UpdateCreditUsageContext } from "../(context)/UpdateCreditUsage";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [totalUsage, setTotalUsage] = useState<Number>(0);
  const [UpdateCreditUsage, setUpdateCreditUsage] = useState<any>();
  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <UpdateCreditUsageContext.Provider
        value={{ UpdateCreditUsage, setUpdateCreditUsage }}
      >
        <div className="min-h-screen">
          <div className="md:w-64 hidden md:block fixed">
            <SideBar />
          </div>
          <div className="md:ml-64">
            <Header />
            {children}
          </div>
        </div>
      </UpdateCreditUsageContext.Provider>
    </TotalUsageContext.Provider>
  );
}

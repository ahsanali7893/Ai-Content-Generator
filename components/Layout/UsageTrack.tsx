"use client";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { db } from "@/utils/db";
import { AiOutput } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { HistoryItem } from "@/app/dashboard/history/page";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsage";

export default function UsageTrack() {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { UpdateCreditUsage, setUpdateCreditUsage } = useContext(
    UpdateCreditUsageContext
  );

  const GetData = async () => {
    const result: HistoryItem[] = await db
      .select()
      .from(AiOutput)
      .where(eq(AiOutput.createdBy, user?.primaryEmailAddress?.emailAddress));
    getTotalUsage(result);
  };
  useEffect(() => {
    user && GetData();
  }, [UpdateCreditUsage]);

  useEffect(() => {
    user && GetData();
  }, [user]);

  const getTotalUsage = (result: HistoryItem[]) => {
    let total: number = 0;
    result.forEach((element) => {
      total = total + Number(element.aiResponse?.length);
    });
    setTotalUsage(total);
    console.log(total);
  };
  return (
    <div className="m-5">
      <div className="bg-primary text-white rounded-lg p-3">
        <h2 className="font-medium">Credits</h2>
        <div className="h-2 bg-[#9981f9] w-full rounded-full mt-3">
          <div
            className="h-2 bg-red-400 rounded-full"
            style={{
              width: (totalUsage / 10000) * 100 + "%",
            }}
          ></div>
        </div>
        <h2 className="text-sm my-2">{totalUsage}/10,000 Credits Used</h2>
      </div>
      <Button variant={"secondary"} className="w-full my-3">
        Upgrade
      </Button>
    </div>
  );
}

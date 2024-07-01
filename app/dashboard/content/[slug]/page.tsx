"use client";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsage";
import Templates from "@/app/(data)/Templates";
import { TEMPLATE } from "@/components/Dashboard/TempletlistSection";
import FormSection from "@/components/SlugContent/FormSection";
import OutPutSection from "@/components/SlugContent/OutPutSection";
import { Button } from "@/components/ui/button";
import { chatSession } from "@/utils/AiModal";
import { db } from "@/utils/db";
import { AiOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { ArrowLeft } from "lucide-react";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";

interface PROPS {
  params: {
    slug: string;
  };
}

export default function CreateContent({ params }: PROPS) {
  const [loading, setLoading] = useState(false);
  const [aiOutPut, setAiOutPut] = useState<string>("");
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const router = useRouter();
  const { user } = useUser();
  const { UpdateCreditUsage, setUpdateCreditUsage } = useContext(
    UpdateCreditUsageContext
  );

  const selectTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === params.slug
  );

  const GenerateAiContent = async (formData: any) => {
    if (totalUsage >= 10000) {
      router.push("/dashboard/billing");
      return;
    }
    setLoading(true);
    try {
      const SelectedPrompt = selectTemplate?.aiPrompt;
      const FinalAiPrompt = JSON.stringify(formData) + "," + SelectedPrompt;
      console.log("Final AI Prompt:", FinalAiPrompt);

      const result = await chatSession.sendMessage(FinalAiPrompt);
      const textResponse = await result.response.text();

      console.log("AI Response:", textResponse);
      setAiOutPut(textResponse);
      await saveInDb(
        JSON.stringify(formData),
        selectTemplate?.slug,
        result.response.text()
      );
    } catch (error) {
      console.error("Error generating AI content:", error);
    } finally {
      setLoading(false);
    }
    setUpdateCreditUsage(Date.now());
  };

  const saveInDb = async (formData: any, slug: any, aiOutPut: string) => {
    if (!user?.primaryEmailAddress?.emailAddress) {
      console.error("User email is undefined");
      return;
    }
    const result = await db.insert(AiOutput).values({
      formData: formData,
      templateSlug: slug,
      aiResponse: aiOutPut,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format("DD/MM/yyyy"),
    });
    console.log("Database Insert Result:", result);
  };

  return (
    <div className="p-10">
      <Link href="/dashboard">
        <Button>
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-10 py-5">
        <FormSection
          selectedTemplate={selectTemplate}
          userFormInput={GenerateAiContent}
          loading={loading}
        />
        <div className="col-span-2">
          <OutPutSection aiOutput={aiOutPut} />
        </div>
      </div>
    </div>
  );
}

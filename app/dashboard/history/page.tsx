"use client";
import { Button } from "@/components/ui/button";
import {
  ClipboardCopyIcon,
  Loader,
  LoaderCircle,
  CheckCircleIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { fetchAiOutputHistory } from "@/utils/fetchData";

export interface HistoryItem {
  id: number;
  formData: string;
  aiResponse: string | null;
  templateSlug: string;
  createdBy: string;
  createdAt: string | null;
  copyStatus: "idle" | "copying" | "copied";
}

const History = () => {
  const [data, setData] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchDataAsync = async () => {
    try {
      const result = await fetchAiOutputHistory();
      const dataWithCopyStatus: HistoryItem[] = result.map((item) => ({
        ...item,
        copyStatus: "idle",
      }));
      setData(dataWithCopyStatus);
    } catch (error) {
      console.error("Error fetching AI output history:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchDataAsync();
  }, []);

  const copyToClipboard = async (text: string, index: number) => {
    try {
      const newData = [...data];
      newData[index].copyStatus = "copying";
      setData(newData);

      await navigator.clipboard.writeText(text);

      newData[index].copyStatus = "copied";
      setData(newData);

      setTimeout(() => {
        const updatedData = [...data];
        updatedData[index].copyStatus = "idle";
        setData(updatedData);
      }, 2000);
    } catch (error) {
      console.error("Copy to clipboard failed:", error);
      const newData = [...data];
      newData[index].copyStatus = "idle";
      setData(newData);
    }
  };

  const renderSnippet = (text: string, maxLength: number) => {
    if (!text) return "";

    const words = text.split(" ");
    const snippet = words.slice(0, maxLength).join(" ");

    if (words.length > maxLength) {
      return snippet + "...";
    }

    return snippet;
  };

  if (loading) {
    return (
      <p className="items-center h-screen flex justify-center">
        <LoaderCircle className="animate-spin h-14 w-14 text-green-600" />
      </p>
    );
  }

  return (
    <div className="p-10">
      <div className="bg-slate-100 w-full p-5 border rounded-lg shadow-lg">
        <h2 className="text-3xl text-primary font-bold">History</h2>
        <p>Search your previously generated AI content</p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gradient-to-r from-red-500 to-pink-500 text-gray-300">
              <tr>
                <th className="px-4 py-2 border">Template</th>
                <th className="px-4 py-2 border">AI Response</th>
                <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">Words</th>
                <th className="px-4 py-2 border">Copy</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border">{item.templateSlug}</td>
                  <td className="px-4 py-2 border">
                    {renderSnippet(item.aiResponse || "", 10)}
                  </td>
                  <td className="px-4 py-2 border">{item.createdAt}</td>
                  <td className="px-4 py-2 border">
                    {item.aiResponse ? item.aiResponse.split(" ").length : 0}
                  </td>
                  <td className="px-4 py-2 border">
                    <Button
                      onClick={() =>
                        copyToClipboard(item.aiResponse || "", index)
                      }
                      className="flex items-center gap-2"
                    >
                      {item.copyStatus === "copying" ? (
                        <Loader size="24px" className="animate-spin" />
                      ) : item.copyStatus === "copied" ? (
                        <CheckCircleIcon size="24px" />
                      ) : (
                        <ClipboardCopyIcon />
                      )}
                      {item.copyStatus !== "idle" ? "Copying" : "Copy"}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default History;

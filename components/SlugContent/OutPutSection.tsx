import React, { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Button } from "../ui/button";
import { Copy } from "lucide-react";

interface PROPS {
  aiOutput: string;
}

export default function OutPutSection({ aiOutput }: PROPS) {
  const editorRef: any = useRef();
  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput]);

  return (
    <div className="bg-gray-100 shadow-lg rounded-lg border">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Your Result</h2>
        <Button
          className="flex gap-1"
          onClick={() => navigator.clipboard.writeText(aiOutput)}
        >
          <Copy />
          Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your Result will appear here"
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
        isViewMode={true}
        onChange={() =>
          console.log(editorRef.current.getInstance().getMarkdown())
        }
      />
    </div>
  );
}

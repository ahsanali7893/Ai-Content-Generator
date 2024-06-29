import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import HomeHeader from "@/components/Home/HomeHeader";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Content Manager",
  description:
    "Discover the best way to manage your tasks and projects with our powerful tools and features.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}

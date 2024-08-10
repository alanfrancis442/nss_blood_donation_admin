"use client";
import Image from "next/image";
import { ThemeProvider } from "@/components/context/themeProvider";
export default function Home() {
  return (
    <ThemeProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        hi
      </main>
    </ThemeProvider>
  );
}

"use client";
import { ThemeProvider } from "@/components/context/themeProvider";
import Nav from "@/components/ui/nav";
import Sidebar from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [width, setwidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setwidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setwidth(window.innerWidth);
      });
    };
  }, []);
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div>
        <Nav />
        <div className="flex">
          {width > 768 && <Sidebar />}
          <Separator orientation="vertical" />
          <main className="flex h-full w-full flex-col items-center justify-between">
            {children}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

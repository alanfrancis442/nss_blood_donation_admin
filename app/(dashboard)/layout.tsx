"use client";
import { ThemeProvider } from "@/components/context/themeProvider";
import Nav from "@/components/ui/nav";
import Sidebar from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
          <Sidebar />
          <Separator orientation="vertical" />
          <main className="flex h-full flex-col items-center justify-between">
            {children}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

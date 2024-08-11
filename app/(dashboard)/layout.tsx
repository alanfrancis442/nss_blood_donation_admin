"use client";
import { ThemeProvider } from "@/components/context/themeProvider";
import Nav from "@/components/ui/nav";
import Sidebar from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [width, setWidth] = useState(0);

  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const fetchUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    //   console.log(user.email);
    if (user) {
      return user;
    } else {
      return null;
    }
  };

  useEffect(() => {
    fetchUser().then((user) => {
      if (!user) {
        router.push("/");
      }
    });
  }, [router]);

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

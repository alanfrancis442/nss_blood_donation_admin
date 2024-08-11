"use client";
import {
  Form,
  FormControl,
  //   FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Nav from "@/components/ui/nav";
import { ThemeProvider } from "@/components/context/themeProvider";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Enter a valid email",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long",
  }),
});

//handel supabase
import { supabase } from "@/utils/supabase/client";

function Signin() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

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

  const handelLogin = async (e: any) => {
    e.preventDefault();
    const { email, password } = form.getValues();
    console.log(email, password);
    let { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      console.log("Login faild:", error.message);
      // toast.error(error.message);
    } else {
      // console.log("User login successfully:", data);
      router.replace("/users");
    }
  };

  useEffect(() => {
    fetchUser().then((user) => {
      // console.log("user", user);
      if (user) {
        router.replace("/users");
      } else {
        console.log("No user found");
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
      <div className="flex flex-col items-center h-screen">
        <Nav />
        <div className="flex justify-center items-center h-screen w-full">
          <Form {...form}>
            <form
              onSubmit={handelLogin}
              className="space-y-8 border p-8 rounded-sm md:min-w-[25%]"
            >
              <div className="text-2xl font-bold underline">Admin Login</div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Signin;

"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";

const forgotPasswordSchema = z.object({
  email: z.string().email({
    message: "Email tidak valid",
  }),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export function ForgotPasswordForm({ className, ...props }: React.ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: ForgotPasswordFormValues) {
    setIsLoading(true);
    // Simulasi pengiriman email reset password
    console.log(data);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  }

  return (
    <div
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <Card className="w-full max-w-md mx-auto">
        {isSubmitted ? (
          <>
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Email Terkirim</CardTitle>
              <CardDescription>
                Kami telah mengirimkan tautan reset password ke email Anda. Silakan periksa kotak
                masuk Anda.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <Link href="/sign-in">
                  <Button className="w-full">Kembali ke Halaman Login</Button>
                </Link>
              </div>
            </CardContent>
          </>
        ) : (
          <>
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Lupa Password</CardTitle>
              <CardDescription>
                Masukkan email Anda dan kami akan mengirimkan tautan untuk mengatur ulang password
                Anda
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="grid gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="john.doe@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? "Memproses..." : "Kirim Tautan Reset"}
                    </Button>
                    <div className="text-center text-sm">
                      Ingat password Anda?{" "}
                      <a
                        href="/sign-in"
                        className="font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        Kembali ke halaman login
                      </a>
                    </div>
                  </div>
                </form>
              </Form>
            </CardContent>
          </>
        )}
      </Card>
    </div>
  );
}

import type { Metadata } from "next";
import { ForgotPasswordForm } from "@/components/forms/forgot-password-form";
import { authPages } from "@/config/metadata";
import { createMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const { title, description, path } = authPages.forgotPassword;
  return createMetadata({ title, description, path });
}

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <ForgotPasswordForm />
      </div>
    </div>
  );
}

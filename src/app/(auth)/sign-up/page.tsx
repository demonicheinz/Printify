import type { Metadata } from "next";
import { SignUpForm } from "@/components/forms/sign-up-form";
import { authPages } from "@/config/metadata";
import { createMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const { title, description, path } = authPages.signUp;
  return createMetadata({ title, description, path });
}

export default function SignUpPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <SignUpForm />
      </div>
    </div>
  );
}

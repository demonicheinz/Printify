import type { Metadata } from "next";
import type { TeamMember, CompanyValue, AboutFAQ } from "@/data";
import { getTeamMembers, getCompanyValues, getAboutFAQs } from "@/services";
import { Header } from "@/components/layout/header";
import ClientAbout from "./client-about";
import { createMetadata } from "@/lib/metadata";
import { infoPages } from "@/config/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const { title, description, path } = infoPages.about;
  return createMetadata({ title, description, path });
}

export default async function AboutPage() {
  const teamMembers: TeamMember[] = await getTeamMembers();
  const companyValues: CompanyValue[] = await getCompanyValues();
  const aboutFAQs: AboutFAQ[] = await getAboutFAQs();

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <Header
        title="Tentang Printify"
        description="Mengenal lebih dekat dengan tim dan visi kami"
      />

      <ClientAbout
        teamMembers={teamMembers}
        companyValues={companyValues}
        aboutFAQs={aboutFAQs}
      />
    </div>
  );
}

import type { TeamMember, CompanyValue, AboutFAQ } from "@/data";
import { teamMembers, companyValues, aboutFAQs } from "@/data";

export async function getTeamMembers(): Promise<TeamMember[]> {
  // Saat ini mengambil dari data statis
  // Nanti bisa diubah untuk mengambil dari database
  return teamMembers;
}

export async function getCompanyValues(): Promise<CompanyValue[]> {
  // Saat ini mengambil dari data statis
  // Nanti bisa diubah untuk mengambil dari database
  return companyValues;
}

export async function getAboutFAQs(): Promise<AboutFAQ[]> {
  // Saat ini mengambil dari data statis
  // Nanti bisa diubah untuk mengambil dari database
  return aboutFAQs;
}

export async function getTeamMemberByName(name: string): Promise<TeamMember | undefined> {
  return teamMembers.find((member) => member.name === name);
}

export async function getCompanyValueByTitle(title: string): Promise<CompanyValue | undefined> {
  return companyValues.find((value) => value.title === title);
}

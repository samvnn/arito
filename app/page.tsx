import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import LandingPage from "./landing/page";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // If the device already has a logged-in user, skip the landing page.
  if (user) {
    redirect("/homepage");
  }

  // Otherwise show the public landing page.
  return <LandingPage />;
}

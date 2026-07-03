import Hero from "@/components/sections/Hero";
import Positioning from "@/components/sections/Positioning";
import SelectedWorks from "@/components/sections/SelectedWorks";
import HowIWork from "@/components/sections/HowIWork";
import ResumePreview from "@/components/sections/ResumePreview";
import AiPreview from "@/components/sections/AiPreview";
import ContactCta from "@/components/sections/ContactCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Positioning />
      <SelectedWorks />
      <HowIWork />
      <ResumePreview />
      <AiPreview />
      <ContactCta />
    </>
  );
}

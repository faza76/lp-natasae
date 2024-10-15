import FAQSection from "@/components/FAQ";
import FeaturesSection from "@/components/FeaturesSection";
import Pricing from "@/components/Pricing";
import TestimonialSection from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <FeaturesSection />
      <Pricing />
      <TestimonialSection />
      <FAQSection />
    </div>
  );
}

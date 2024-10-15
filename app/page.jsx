import ContentSection from "@/components/ContentSection";
import CTASection from "@/components/CTA";
import FAQSection from "@/components/FAQ";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import TestimonialSection from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturesSection />
      <ContentSection />
      <Pricing />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}

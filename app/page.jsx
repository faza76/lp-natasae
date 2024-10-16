import ContentSection from "@/components/ContentSection";
import CTASection from "@/components/CTA";
import FAQSection from "@/components/FAQ";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import TestimonialSection from "@/components/Testimonial";
import Image from "next/image";

import preview from "@/public/image-hero.png"

export const metadata = {
  title: 'Natasae Studio',
  description: 'Mari wujudkan cerita Anda melalui desain arsitektur',
  openGraph: {
    title: 'Natasae Studio',
    description: 'Mari wujudkan cerita Anda melalui desain arsitektur',
    url: 'https://natasaestudio.com',
    images: [
      {
        url: preview.src,
        width: 1200,
        height: 630,
        alt: 'Image description',
      },
    ],
  },
  twitter: {
    card: 'Natasae Studio',
    title: 'Natasae Studio',
    description: 'Mari wujudkan cerita Anda melalui desain arsitektur',
    images: [preview.src],
  },
};

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

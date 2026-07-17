import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReturnToTop from '@/components/ReturnToTop';
import HomeClient from '@/components/HomeClient';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WorkSection from '@/components/sections/WorkSection';
import WorkflowSection from '@/components/sections/WorkflowSection';
import FaqSection from '@/components/sections/FaqSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import MissionSection from '@/components/sections/MissionSection';
import VisionSection from '@/components/sections/VisionSection';

export const metadata: Metadata = {
  title: 'IMITATOR | Elite AI Digital Transformation',
  description:
    'We engineer world-class digital products and transform traditional enterprises into autonomous, AI-powered organizations. Precision logic meets luxury design.',
  alternates: {
    canonical: 'https://imitator.in',
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <IndustriesSection />
        <ServicesSection />
        <WorkSection />
        <WorkflowSection />
        <FaqSection />
        <TestimonialsSection />
        <MissionSection />
        <VisionSection />
      </main>
      <Footer />
      <ReturnToTop />
      <HomeClient />
    </>
  );
}

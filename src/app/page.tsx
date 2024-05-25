// This is the entry component for the landing page of the application.
// It sequentially renders the primary sections of the landing page including Hero, Features, Product, Pricing, Faq, and Footer components.

import LandingPage8 from "@/components/landing-pages/landing-page-8";
import LandingPage10 from "@/components/landing-pages/landing-page-10";

export default async function Home() {
  return (
    <>
      <LandingPage8 />
      <LandingPage10 />
    </>
  );
}

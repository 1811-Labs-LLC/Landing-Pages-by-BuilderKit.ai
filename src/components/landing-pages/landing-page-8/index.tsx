import FeaturedOn from './FeaturedOn';
import Hero from './Hero';
import Features2 from './Features2';
import Features from './Features';
import Pricing from './Pricing';
import Faq from './FAQ';
import Footer from './Footer';

export default function LandingPage8() {
  return (
    <div className='text-[#090A18]'>
      <div className='bg-black bg-gradient-to-tr from-[#090A1843] to-[#313B825D] text-white'>
        <Hero />
        <FeaturedOn />
      </div>
      <Features />
      <Features2 />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  );
}

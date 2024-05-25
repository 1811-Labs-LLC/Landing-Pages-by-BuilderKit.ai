// This component serves as the primary visual and textual introduction on the homepage.
// It typically includes a headline, a subheading, and a call-to-action (CTA) button to engage users right from the start.
// This component plays a crucial role in setting the tone and providing key information about the product or service.

import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import dashboard from '@/assets/landing-page-10/dashboard.png';
import FlickIcon from '@/assets/landing-page-10/FlickIcon';
import ButtonCta from './ButtonCta';

const Hero = () => {
  return (
    <section className='space-y-20 px-4'>
      <div className='flex flex-col justify-center '>
        <div className='space-y-[18px] max-w-2xl mx-auto'>
          <div className='px-4 py-1.5 gap-2 bg-[#022f21] rounded-full w-fit mx-auto'>
            <div className='text-[#18EDA7] text-sm font-semibold flex items-center gap-2'>
              Unlock Your Creative Spark! <FaArrowRight className='size-3' />
            </div>
          </div>
          <div className='text-center text-[64px] font-bold leading-[4rem] tracking-[-1.28px] grey-gradient text-transparent relative'>
            <div className='absolute md:left-8 -top-3 md:-top-4'>
              <FlickIcon />
            </div>
            <span>Generate AI Apps with ease</span>
          </div>
          <div className='max-w-96 mx-auto text-center font-medium leading-7 tracking-[0.04px] text-[#ABABB0]'>
            Unleash Your Creative Potential by Turning What You Consume into Engaging Content Ideas
          </div>
        </div>
        <div className='mt-10 mx-auto'>
          <ButtonCta className='px-10 py-3 h-10' />
        </div>
      </div>

      <Image src={dashboard} width={1000} height={420} alt='hero' className='w-full rounded-t-lg' />
    </section>
  );
};

export default Hero;

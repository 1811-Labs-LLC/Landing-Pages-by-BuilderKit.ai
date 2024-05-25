import Navbar from './Navbar';
import Image from 'next/image';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { FaArrowRight } from 'react-icons/fa6';
import Button from './Button';
import hero from '@/assets/landing-page-8/images/hero.svg';

export default function Hero() {
  return (
    <div className='flex flex-col items-center md:gap-24 gap-16'>
      <Navbar />

      <div className='flex flex-col gap-12 items-center'>
        <div className='flex flex-col gap-5 max-md:max-w-80 w-full items-center'>
          <div className='border border-[#222222] px-4 items-center flex h-7 font-semibold text-sm rounded-full'>
            Unlock Your Creative Spark!
            <ArrowRightIcon className='ml-2' />
          </div>

          <h1 className='font-medium md:leading-[60px] md:text-[60px] text-3xl text-center md:w-fit'>
            Generate AI Apps with ease
          </h1>

          <span className='text-[#787878] text-sm md:text-base text-center max-w-[736px] leading-7'>
            Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours
            of Effort and Use our robust Deployable code.
          </span>
        </div>
        <Button fill={false} size='md'>
          <span>Get Started</span>
          <FaArrowRight />
        </Button>
      </div>

      <Image src={hero} width={200} height={200} alt='hero' className='w-full md:px-40 px-5' />
    </div>
  );
}

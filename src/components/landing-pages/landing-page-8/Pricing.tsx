import Image from 'next/image';
import tick from '@/assets/landing-page-8/icons/tick.svg';
import Button from './Button';
import pricingDetails from './PricingConstants';
import { FaArrowRight } from 'react-icons/fa6';
export default function Pricing() {
  return (
    <div
      id='pricing'
      // eslint-disable-next-line tailwindcss/no-contradicting-classname
      className='bg-black bg-gradient-to-b to-[#090A18] to-25% from-[#5d67b378] flex flex-col md:gap-20 gap-10 items-center md:py-32 py-24 text-white'>
      <div className='flex flex-col gap-4 text-center'>
        <h1 className='md:text-4xl font-medium text-2xl'>Pricing</h1>
        <span className='text-[#787878]'>Start making smarter decisions, Choose a plan</span>
      </div>

      <div className='flex md:gap-6 gap-3 md:mx-2 flex-col md:flex-row '>
        {pricingDetails.map((plans) => {
          return (
            <div
              key={plans.title}
              className='bg-gradient-to-tl from-[#090A18] to-[#5D67B3] rounded-2xl h-fit md:w-[368px] w-80'>
              <div className='card flex flex-col gap-16 md:p-6 p-3 justify-start items-start bg-[#151627] rounded-2xl md:pt-12 pt-8 h-fit w-90 m-px'>
                <div className='flex flex-col md:gap-8 gap-6'>
                  <div className='flex flex-col gap-3'>
                    <h3 className='text-lg font-semibold'>{plans.title}</h3>
                    <div className='flex items-center'>
                      <span className='text-4xl font-semibold'>{plans.price}</span>
                      <span className='text-stone-500'>/month</span>
                    </div>
                  </div>

                  <div className='flex flex-col md:gap-4 gap-3'>
                    {plans.features.map((feat) => {
                      return (
                        <div key={feat} className='flex items-start gap-3 text-start'>
                          <Image src={tick} width={20} height={20} alt='icon' />
                          <span>{feat}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <Button fill={plans.title !== 'PRO' ? true : false} size='lg' className='w-full'>
                  Get now
                  <FaArrowRight />
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

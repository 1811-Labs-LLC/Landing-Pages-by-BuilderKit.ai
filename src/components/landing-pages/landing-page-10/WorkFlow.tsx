// This component illustrates the step-by-step process or workflow of how the service or product operates.
// It is a simple component that displays the workflow of the service or product in a visually appealing manner.

import Image from 'next/image';
import React from 'react';
import card from '@/assets/landing-page-10/card.png';
import multipleCard from '@/assets/landing-page-10/multiple-cards.png';

const WorkFlow = () => {
  return (
    <div className='space-y-[96px] p-6 mt-[200px]'>
      <div className='space-y-6 mx-auto'>
        <h1 className='header-gradient text-5xl md:text-[56px] text-center font-medium'>
          Unleash the power of AI
        </h1>
        <p className='text-[#ABABB0] text-lg md:text-2xl leading-[34.54px] tracking-[0.2px] text-center max-w-2xl mx-auto'>
          Feel free to customize your reports. Utilize our super-table instead of exporting and importing data
        </p>
      </div>
      <div className='space-y-8'>
        <div className='p-10 md:p-20 bg-card-background rounded-3xl'>
          <div className='block md:flex gap-5 space-y-12 md:space-y-0'>
            <div className='space-y-5 md:w-1/2'>
              <p className='text-white text-[32px] font-bold'>Design like a PRO</p>
              <p className='text-[#C9C9C9] text-xl font-light leading-8'>
                Our intuitive interface and advanced features make it easy to write and debug code Our
                intuitive interface and advanced features make it easy to write and debug code
              </p>
            </div>
            <div className='md:w-1/2'>
              <Image src={card} width={472} height={228} alt='workflow' />
            </div>
          </div>
        </div>
        <div className='gap-8 block md:flex space-y-8 md:space-y-0'>
          <div className='px-10 py-12 bg-card-background rounded-3xl'>
            <div className='space-y-12 gap-12'>
              <div className='space-y-2'>
                <p className='text-white text-[32px] font-bold'>More efficient</p>
                <p className='text-[#C9C9C9] text-xl font-light leading-8'>
                  Our code editor provides a simple and intuitive interface that helps you write code quickly
                  and efficiently.
                </p>
              </div>
              <div>
                <Image src={multipleCard} width={472} height={228} alt='workflow' />
              </div>
            </div>
          </div>
          <div className='px-10 py-12 bg-card-background rounded-3xl'>
            <div className='space-y-12 gap-12'>
              <div className='space-y-2'>
                <p className='text-white text-[32px] font-bold'>More efficient</p>
                <p className='text-[#C9C9C9] text-xl font-light leading-8'>
                  Our code editor provides a simple and intuitive interface that helps you write code quickly
                  and efficiently.
                </p>
              </div>
              <div>
                <Image src={multipleCard} width={472} height={228} alt='workflow' />
              </div>
            </div>
          </div>
        </div>
        <div className='p-10 md:p-20 bg-card-background rounded-3xl'>
          <div className='block md:flex gap-5 space-y-12 md:space-y-0'>
            <div className='space-y-5 md:w-1/2'>
              <p className='text-white text-[32px] font-bold'>Design like a PRO</p>
              <p className='text-[#C9C9C9] text-xl font-light leading-8'>
                Our intuitive interface and advanced features make it easy to write and debug code Our
                intuitive interface and advanced features make it easy to write and debug code
              </p>
            </div>
            <div className='md:w-1/2'>
              <Image src={card} width={472} height={228} alt='workflow' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;

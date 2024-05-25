import { Lightning } from '@/assets/landing-page-8/icons';
import Image from 'next/image';

const cardDetails = [
  {
    title: 'Quality apps',
    content: 'Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.',
  },
  {
    title: 'Quality apps',
    content: 'Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.',
  },
  {
    title: 'Quality apps',
    content: 'Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.',
  },
  {
    title: 'Quality apps',
    content: 'Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.',
  },
  {
    title: 'Quality apps',
    content: 'Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.',
  },
  {
    title: 'Quality apps',
    content: 'Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.',
  },
];

export default async function Features2() {
  return (
    <div className='flex flex-col md:py-32 py-16 items-center md:gap-20 gap-10'>
      <div className='flex flex-col gap-7 items-center max-md:max-w-80'>
        <div className='flex flex-col gap-4 items-center'>
          <h1 className='font-medium text-2xl md:text-4xl md:leading-[44px] max-w-xl text-center'>
            Essentially, <span className='text-[#005CE7]'>everything</span> you need to ship{' '}
            <span className='text-[#005CE7]'>you first AI App</span>
          </h1>
        </div>

        <span className='md:text-lg md:max-w-[642px] text-[#787878] text-center'>
          Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours of
          Effort and Use our robust Deployable code.
        </span>
      </div>

      <div className='flex md:grid grid-cols-3 flex-col md:gap-1.5 gap-4 flex-wrap'>
        {cardDetails.map((card, index) => {
          return (
            <div key={index} className='flex flex-col gap-6 md:p-6 md:pb-8 p-4 w-96 items-center'>
              <Image src={Lightning} width={25} height={25} alt='logo' className='size-6' />
              <div className='flex flex-col gap-4'>
                <h1 className='md:text-xl text-lg font-medium text-center'>{card.title}</h1>
                <p className='text-[#787878] text-center px-10'>{card.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import Image from 'next/image';
import features from '@/assets/landing-page-8/images/features.svg';

const cardDetails = [
  {
    title: 'Build your AI apps Fast',
    content:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.',
    url: features,
  },
  {
    title: 'Build your AI apps Fast',
    content:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.',
    url: features,
  },
  {
    title: 'Build your AI apps Fast',
    content:
      'Builderkit takes care of everything from authentication to payments, get your production-ready app within hours.',
    url: features,
  },
];

export default async function Features() {
  return (
    <div id='features' className='flex justify-center'>
      <div className='md:max-w-6xl max-w-80 flex flex-col md:py-32 py-24 items-center md:gap-24 gap-16'>
        <div className='flex flex-col items-center gap-7 justify-between text-center'>
          <h1 className='md:text-4xl text-2xl font-medium max-w-lg flex flex-col md:gap-2'>
            <span>Explore the power of</span>
            <span>
              AI apps generation <span className='text-[#005CE7]'>Workflow</span>
            </span>
          </h1>

          <span className='text-[#787878] leading-6 md:text-lg max-w-[628px]'>
            Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours
            of Effort and Use our robust Deployable code.
          </span>
        </div>

        <div className='flex gap-4 flex-col md:flex-row '>
          {cardDetails.map((card) => (
            <div key={card.title} className='flex flex-col md:gap-6 gap-4'>
              <Image
                src={card.url}
                alt={card.title}
                width={400}
                height={400}
                className='bg-[#F2F1F960] rounded-sm'
              />
              <div className='text-center'>
                <h2 className='font-medium md:text-2xl text-xl mb-4'>{card.title}</h2>
                <span className='text-[#727272]'>{card.content}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

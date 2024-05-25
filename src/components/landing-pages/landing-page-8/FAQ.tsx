import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const accordion = [
  {
    title: 'What is buildekit?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ad vitae excepturi, necessitatibus ex eveniet deserunt eaque qui quisquam architecto sapiente dolorum. Eligendi ipsum perferendis corrupti quasi eius blanditiis beatae.',
  },
  {
    title: 'What do i get exactly?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ad vitae excepturi, necessitatibus ex eveniet deserunt eaque qui quisquam architecto sapiente dolorum. Eligendi ipsum perferendis corrupti quasi eius blanditiis beatae.',
  },
  {
    title: 'Who is builder kit for?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ad vitae excepturi, necessitatibus ex eveniet deserunt eaque qui quisquam architecto sapiente dolorum. Eligendi ipsum perferendis corrupti quasi eius blanditiis beatae.',
  },
  {
    title: 'Is it a website template?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ad vitae excepturi, necessitatibus ex eveniet deserunt eaque qui quisquam architecto sapiente dolorum. Eligendi ipsum perferendis corrupti quasi eius blanditiis beatae.',
  },
];

export default function FAQ() {
  return (
    <div id='faq' className='flex flex-col items-center md:py-32 md:gap-20 gap-10 py-16'>
      <div className='flex flex-col gap-6 items-center justify-around'>
        <h1 className='md:text-4xl font-medium text-2xl'>Frequently asked questions</h1>
        <p className='text-[#787878] px-10 md:px-0 text-center'>
          Don't worry, we got you. Here are some answers for your questions.
        </p>
      </div>
      <div className='flex flex-col items-start leading-8 '>
        {accordion.map((item, index) => {
          return (
            <Accordion type='single' collapsible key={index}>
              <AccordionItem value={item.title} className=' md:w-[780px] w-80 p-2 border-[#F3F3F3]'>
                <AccordionTrigger className='font-medium text-base md:h-16'>{item.title}</AccordionTrigger>
                <AccordionContent className='text-stone-400 text-sm'>{item.content}</AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
}

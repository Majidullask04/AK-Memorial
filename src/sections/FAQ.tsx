import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { siteData } from '../content/siteData';

const FAQ = () => {
  return (
    <section id="faq" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
        <div>
          <p className="section-kicker text-white/60">Common Questions</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Clear answers for <span className="gradient-text">first-time visitors.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/66">
            The FAQ now aligns with the actual doctor profile, clinic identity, and verified contact
            details taken from your local files.
          </p>
        </div>

        <div className="surface-panel rounded-[34px] p-4 sm:p-6">
          <Accordion type="single" collapsible className="w-full">
            {siteData.faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="border-b border-white/10 px-2"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-white hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-7 text-white/62">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

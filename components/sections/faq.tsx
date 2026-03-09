'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ScrollReveal } from '@/components/scroll-reveal'

const faqs = [
  {
    id: 'cost',
    question: 'How much does sustainable landscaping cost compared to traditional?',
    answer: 'Initial costs are typically 10-20% higher than traditional landscaping, but you recoup that investment within 2-3 years through water savings alone. Our clients save an average of $1,200-$2,400 annually on water bills. Plus, sustainable landscapes increase property value by 15-20%, far exceeding the additional upfront investment. We offer flexible financing options to make the transition affordable.',
  },
  {
    id: 'maintenance',
    question: 'Will my yard still look good without constant watering?',
    answer: 'Absolutely — in fact, many of our clients say their yards look better than ever. Native and drought-tolerant plants are adapted to thrive in Central Texas conditions. After the establishment period (6-12 months), most xeriscape gardens need watering only during extreme drought. The key is strategic plant selection and smart irrigation that delivers water exactly where and when it is needed.',
  },
  {
    id: 'timeline',
    question: 'How long does a typical project take from start to finish?',
    answer: 'Most residential projects are completed within 4-6 weeks. This includes the initial consultation and design phase (1-2 weeks), material sourcing (1 week), and installation (2-3 weeks). Larger or more complex projects may take 8-10 weeks. We work efficiently to minimize disruption, and many clients are surprised how quickly their transformation happens.',
  },
  {
    id: 'guarantee',
    question: 'What if my plants do not survive? Do you offer guarantees?',
    answer: 'Yes! We stand behind our work with a 1-year plant guarantee. If any plants we install fail to thrive within the first year (assuming proper care following our guidelines), we replace them at no cost. We also provide detailed care instructions and offer optional maintenance packages to ensure your landscape succeeds. Our 98% plant survival rate speaks to the quality of our work.',
  },
]

export function FAQSection() {
  return (
    <section className="py-24 bg-sage-50" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-sage-200 text-sage-700 text-sm font-medium mb-4">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-700 mb-6">
              Got Questions?
              <span className="block text-sage-600">We Have Answers</span>
            </h2>
            <p className="text-lg text-slate-500">
              Everything you need to know about sustainable landscaping with GreenHorizon.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-white rounded-xl border border-sand-200 px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-slate-700 hover:text-sage-600 hover:no-underline py-5 text-base sm:text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-500 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="mt-12 text-center">
            <p className="text-slate-500">
              Still have questions?{' '}
              <a 
                href="mailto:elias@greenhorizonlandscapes.com" 
                className="text-sage-600 hover:text-sage-700 font-medium underline underline-offset-4"
              >
                Contact Elias directly
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

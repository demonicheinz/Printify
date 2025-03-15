"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { AboutFAQ } from "@/data";

interface FAQSectionProps {
  faqs: AboutFAQ[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
    >
      {faqs.map((faq, i) => (
        <AccordionItem
          key={i}
          value={`item-${i}`}
        >
          <AccordionTrigger className="text-base font-medium hover:no-underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

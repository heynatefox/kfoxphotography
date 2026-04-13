"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <h2 className="heading-lg text-center mb-4">FAQs</h2>
        <div className="divider-sage mx-auto mb-12" />

        <div className="divide-y divide-warm-200">
          {faqs.map((faq, i) => (
            <div key={i} className="py-6">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 text-left group"
                aria-expanded={openIndex === i}
              >
                <h3 className="font-serif text-lg md:text-xl font-medium text-charcoal group-hover:text-sage-600 transition-colors">
                  {faq.question}
                </h3>
                <span
                  className={`mt-1.5 flex-shrink-0 w-5 h-5 flex items-center justify-center transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  <svg
                    className="w-4 h-4 text-sage-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              <div className={`faq-answer ${openIndex === i ? "open" : ""}`}>
                <div>
                  <p className="body-lg pt-4 pb-2">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

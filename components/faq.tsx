"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How much does your cleaning service cost?",
    answer:
      "Our pricing depends on the size of your space, the type of cleaning required, and the frequency of service. We offer free in-home estimates to provide you with an accurate quote.",
  },
  {
    question: "How frequently should I schedule a cleaning?",
    answer:
      "This depends on your lifestyle and needs. Most clients opt for weekly or bi-weekly cleanings to maintain a consistently clean home. We also offer one-time deep cleans for special occasions.",
  },
  {
    question: "What if I need to cancel or reschedule?",
    answer:
      "We understand that schedules change. You can cancel or reschedule your appointment with at least 24 hours notice without any penalty.",
  },
  {
    question: "Do I need to be home during cleaning?",
    answer:
      "It's not necessary for you to be home during our cleaning service. Many clients provide us with access via key lockboxes or garage codes. All staff are thoroughly vetted and insured.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(1)

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">Got questions? We've got answers</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card rounded-xl border border-border overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="flex items-center gap-4">
                  <span className="text-sm font-medium text-primary">{String(index + 1).padStart(2, "0")}</span>
                  <span className="font-medium text-foreground">{faq.question}</span>
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-48" : "max-h-0"
                }`}
              >
                <div className="px-5 pb-5 pl-14">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-primary rounded-2xl">
          <h3 className="text-xl font-semibold text-primary-foreground mb-4">Still have questions?</h3>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-medium rounded-full hover:bg-white/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}

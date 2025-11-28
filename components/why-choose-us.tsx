import { Leaf, Shield, Calendar, Clock, Tag, Award } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Safe, non-toxic cleaning products that protect your family and the environment",
  },
  {
    icon: Shield,
    title: "Trusted Staff",
    description: "Background-checked and insured professional cleaners you can rely on",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Book anytime that works for you including weekends and evenings",
  },
  {
    icon: Clock,
    title: "Punctual Service",
    description: "Always on time, every time. Reliable service you can count on",
  },
  {
    icon: Tag,
    title: "Affordable Pricing",
    description: "Competitive rates with transparent pricing and no hidden fees",
  },
  {
    icon: Award,
    title: "Insured & Bonded",
    description: "Fully insured and bonded for your peace of mind and protection",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Why Choose Us?</h2>
          <p className="text-muted-foreground text-lg">
            We&apos;re committed to delivering exceptional service that exceeds your expectations
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

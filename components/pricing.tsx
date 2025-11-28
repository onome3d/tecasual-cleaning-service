import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const subscriptionPlans = [
  {
    name: "Monthly",
    price: "₦50,000",
    period: "/month",
    description: "Perfect for trying our services",
    features: ["4 cleaning sessions", "Basic support", "Flexible scheduling", "Cancel anytime"],
    popular: false,
  },
  {
    name: "3 Months",
    price: "₦135,000",
    period: "/quarter",
    description: "Save 10% with quarterly billing",
    features: ["12 cleaning sessions", "Priority support", "Free fumigation", "Dedicated cleaner", "Laundry included"],
    popular: true,
  },
  {
    name: "6 Months",
    price: "₦250,000",
    period: "/6 months",
    description: "Save 17% with semi-annual billing",
    features: [
      "24 cleaning sessions",
      "24/7 priority support",
      "2x fumigation included",
      "Dedicated team",
      "Laundry + dishes included",
      "Free errands service",
    ],
    popular: false,
  },
  {
    name: "1 Year",
    price: "₦450,000",
    period: "/year",
    description: "Best value - Save 25%",
    features: [
      "52 cleaning sessions",
      "VIP support",
      "4x fumigation included",
      "Dedicated team",
      "All services included",
      "Free nanny hours",
      "Priority booking",
    ],
    popular: false,
  },
]

const propertyPricing = [
  { type: "1 Bedroom", price: "₦15,000" },
  { type: "2 Bedroom", price: "₦25,000" },
  { type: "3 Bedroom", price: "₦35,000" },
  { type: "Duplex/Terrace", price: "₦50,000" },
  { type: "Office", price: "From ₦30,000" },
  { type: "Hotel/Club", price: "Custom Quote" },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Subscription Plans
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose a plan that works for you. The longer you commit, the more you save.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {subscriptionPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl border p-6 space-y-6 ${
                plan.popular ? "border-primary shadow-xl scale-105" : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
              </div>

              <div>
                <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-full ${plan.popular ? "" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}
                variant={plan.popular ? "default" : "secondary"}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Property-based pricing */}
        <div className="bg-secondary/30 rounded-3xl p-8 md:p-12">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">One-Time Cleaning Prices</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {propertyPricing.map((item, index) => (
              <div key={index} className="bg-card rounded-xl p-4 text-center border border-border">
                <p className="text-sm text-muted-foreground mb-2">{item.type}</p>
                <p className="text-lg font-bold text-primary">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

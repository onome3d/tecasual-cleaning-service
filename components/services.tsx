import { Button } from "@/components/ui/button"
import {
  Clock,
  ArrowRight,
  Home,
  Building2,
  Sparkles,
  UtensilsCrossed,
  Baby,
  Shirt,
  ShoppingBag,
  Bug,
} from "lucide-react"

const services = [
  {
    title: "Residential Cleaning",
    description: "1-bedroom to 3-bedroom apartments, duplexes, and terrace homes. Thorough cleaning for every room.",
    price: "From ₦15,000",
    duration: "2-4 hours",
    icon: Home,
  },
  {
    title: "Commercial Cleaning",
    description:
      "Offices, hotels, clubs, churches, companies, and estates. Professional cleaning for any commercial space.",
    price: "Custom Quote",
    duration: "Varies",
    icon: Building2,
  },
  {
    title: "Fumigation",
    description: "Pest control services with 3-month or 6-month protection plans. Keep your space pest-free.",
    price: "From ₦25,000",
    duration: "3-6 months coverage",
    icon: Bug,
  },
  {
    title: "Dish Washing",
    description: "Professional plate washing service for homes, events, and commercial kitchens.",
    price: "Per session",
    duration: "1-2 hours",
    icon: Sparkles,
  },
  {
    title: "Cooking Services",
    description: "Experienced cooks for daily meals, parties, or special events. Customized to your taste.",
    price: "Per session",
    duration: "Flexible",
    icon: UtensilsCrossed,
  },
  {
    title: "Nanny Services",
    description: "Part-time or sleep-over nannies. School runs, bathing, dressing, and childcare support.",
    price: "Daily/Monthly",
    duration: "Flexible",
    icon: Baby,
  },
  {
    title: "Laundry Service",
    description: "Professional washing, ironing, and folding. Pickup and delivery available.",
    price: "Per load",
    duration: "24-48 hours",
    icon: Shirt,
  },
  {
    title: "Errands & More",
    description: "Grocery shopping, bill payments, pickups, and other errands handled for you.",
    price: "Per task",
    duration: "Same day",
    icon: ShoppingBag,
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg">
            From cleaning to cooking, childcare to errands - we offer complete home and lifestyle services tailored to
            your needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 p-6 space-y-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>

                <div className="pt-2">
                  <span className="text-lg font-bold text-primary">{service.price}</span>
                </div>

                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {service.duration}
                </div>

                <Button variant="ghost" className="w-full justify-between group/btn p-0 h-auto">
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

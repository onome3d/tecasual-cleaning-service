"use client";

import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Check, Star, Shield, Clock, Zap, ArrowRight, Home, Building2, Sparkles, Baby, UtensilsCrossed, Shirt } from "lucide-react";
import { useEffect, useRef } from "react";

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setTimeout(() => entry.target.classList.add("animate-in"), delay);
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);
  return <div ref={ref} className={`opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 ${className}`}>{children}</div>;
}

const subscriptionPlans = [
  { name: "Monthly", price: "₦50,000", period: "/month", description: "Flexible month-to-month cleaning service.", features: ["Weekly Standard Cleaning", "Living Room & Bedrooms", "Kitchen & Bathroom", "Dusting & Vacuuming", "Trash Removal"], popular: false, savings: null },
  { name: "3 Months", price: "₦135,000", period: "/quarter", description: "Save 10% with quarterly commitment.", features: ["All Monthly Features", "Bi-Weekly Deep Cleaning", "Interior Window Cleaning", "Appliance Surface Cleaning", "Priority Scheduling"], popular: true, savings: "Save ₦15,000" },
  { name: "6 Months", price: "₦250,000", period: "/6 months", description: "Best value for consistent cleanliness.", features: ["All Quarterly Features", "Monthly Deep Cleaning", "Cabinet Organization", "Laundry (Wash & Fold)", "Free Fumigation (1x)"], popular: false, savings: "Save ₦50,000" },
  { name: "1 Year", price: "₦450,000", period: "/year", description: "Ultimate savings with annual plan.", features: ["All 6-Month Features", "Weekly Deep Cleaning", "Ironing Services", "Free Fumigation (2x)", "Dedicated Cleaning Team"], popular: false, savings: "Save ₦150,000" },
];

const residentialPrices = [
  { type: "1 Bedroom Apartment", price: "₦15,000", description: "Standard cleaning for compact spaces" },
  { type: "2 Bedroom Apartment", price: "₦25,000", description: "Thorough cleaning for medium homes" },
  { type: "3 Bedroom Apartment", price: "₦35,000", description: "Complete cleaning for larger homes" },
  { type: "Terrace Duplex", price: "₦50,000", description: "Multi-level home cleaning" },
  { type: "Castle/Mansion", price: "From ₦100,000", description: "Luxury property cleaning" },
];

const commercialPrices = [
  { type: "Office", price: "From ₦30,000", description: "Professional workspace cleaning" },
  { type: "Church", price: "From ₦40,000", description: "Place of worship cleaning" },
  { type: "Company/Organization", price: "From ₦50,000", description: "Corporate facility cleaning" },
  { type: "Club/Lounge", price: "From ₦45,000", description: "Entertainment venue cleaning" },
  { type: "Hotel", price: "From ₦60,000", description: "Hospitality cleaning services" },
  { type: "New Building/Post-Construction", price: "Custom Quote", description: "Construction debris removal" },
  { type: "Estate/Road Cleaning", price: "Custom Quote", description: "Large-scale outdoor cleaning" },
];

const fumigationPlans = [
  { duration: "One-Time", price: "₦25,000", description: "Single fumigation treatment" },
  { duration: "3 Months Plan", price: "₦60,000", description: "Quarterly pest control coverage" },
  { duration: "6 Months Plan", price: "₦100,000", description: "Bi-annual pest protection" },
];

const additionalServices = [
  { icon: UtensilsCrossed, title: "Dish Washing", price: "₦3,000/session", description: "Professional dishwashing service" },
  { icon: UtensilsCrossed, title: "Cooking", price: "₦5,000/meal", description: "Home-cooked meals prepared for you" },
  { icon: Baby, title: "Part-Time Nanny", price: "₦8,000/day", description: "Daytime childcare assistance" },
  { icon: Baby, title: "Sleep-Over Nanny", price: "₦15,000/night", description: "Overnight childcare service" },
  { icon: Shirt, title: "Laundry Service", price: "₦5,000/load", description: "Wash, dry, and fold service" },
  { icon: Baby, title: "Kids Bath & School Prep", price: "₦4,000/morning", description: "Get kids ready for school" },
  { icon: Zap, title: "Errands", price: "₦3,000/hour", description: "Run errands on your behalf" },
];

const trustIndicators = [
  { icon: Shield, title: "Fully Insured", desc: "Your property is protected with our comprehensive insurance coverage." },
  { icon: Clock, title: "Reliable Service", desc: "We respect your time and always arrive as scheduled." },
  { icon: Zap, title: "Satisfaction Guaranteed", desc: "Not happy? We'll re-clean for free until you are satisfied." },
];


export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/titlebar-bg-02.png" alt="Pricing Background" fill className="object-cover scale-105" priority />
          <div className="absolute inset-0 bg-linear-to-b from-background/90 via-background/50 to-background" />
        </div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse hidden md:block" />
        <div className="absolute top-40 left-10 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-bounce hidden md:block" style={{ animationDuration: "4s" }} />

        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-5 py-2 rounded-full text-primary text-xs font-bold mb-8 animate-fade-in tracking-[0.2em] uppercase" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
            <Star className="w-4 h-4 animate-pulse" />
            Transparent Pricing
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight animate-fade-in leading-[1.1]" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
            TECASUAL <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">{"{cleaning service}"}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light animate-fade-in" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
            Professional cleaning, childcare, and home services. Choose the perfect plan for your lifestyle.
          </p>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-5 py-2 rounded-full text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Save More
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">Subscription Plans</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">Save more with longer commitments. All plans include regular cleaning visits.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {subscriptionPlans.map((plan, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className={`relative rounded-3xl p-6 md:p-8 border h-full flex flex-col ${plan.popular ? "border-primary shadow-2xl lg:scale-105 z-10 bg-primary/5" : "border-border shadow-lg bg-card"} transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 group`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold shadow-lg tracking-wide uppercase">Most Popular</div>
                  )}
                  {plan.savings && <div className="text-green-600 text-xs font-bold mb-2 tracking-wide">{plan.savings}</div>}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2 tracking-tight">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{plan.description}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl md:text-4xl font-bold tracking-tight">{plan.price}</span>
                      <span className="text-muted-foreground text-sm">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                          <Check className="w-3 h-3 text-primary group-hover:text-white" />
                        </div>
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full rounded-full font-bold h-12 transition-all duration-300 hover:scale-105" variant={plan.popular ? "default" : "outline"}>Choose Plan</Button>
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Residential Cleaning */}
      <section className="py-20 md:py-32 bg-secondary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary"><Home className="w-6 h-6" /></div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Residential Cleaning</h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">One-time cleaning prices based on property size.</p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {residentialPrices.map((item, index) => (
              <AnimatedSection key={index} delay={index * 80}>
                <div className="bg-card p-5 md:p-6 rounded-2xl shadow-sm border border-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 text-center group cursor-default hover:-translate-y-2 h-full">
                  <h3 className="font-bold mb-2 text-sm md:text-base tracking-tight group-hover:text-primary transition-colors">{item.type}</h3>
                  <p className="text-primary text-xl md:text-2xl font-bold mb-2 tracking-tight">{item.price}</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Cleaning */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary"><Building2 className="w-6 h-6" /></div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Commercial Cleaning</h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">Professional cleaning for businesses and organizations.</p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {commercialPrices.map((item, index) => (
              <AnimatedSection key={index} delay={index * 80}>
                <div className="bg-card p-5 md:p-6 rounded-2xl shadow-sm border border-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group cursor-default hover:-translate-y-2 h-full">
                  <h3 className="font-bold mb-2 text-sm md:text-base tracking-tight group-hover:text-primary transition-colors">{item.type}</h3>
                  <p className="text-primary text-lg md:text-xl font-bold mb-2 tracking-tight">{item.price}</p>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* Fumigation */}
      <section className="py-20 md:py-32 bg-secondary/20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary"><Sparkles className="w-6 h-6" /></div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Fumigation Services</h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">Keep your space pest-free with our fumigation plans.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {fumigationPlans.map((plan, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-card p-6 md:p-8 rounded-3xl shadow-lg border border-border hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 text-center group cursor-default hover:-translate-y-3 h-full flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">{plan.duration}</h3>
                  <p className="text-primary text-3xl md:text-4xl font-bold mb-4 tracking-tight">{plan.price}</p>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-1">{plan.description}</p>
                  <Link href="/contact">
                    <Button variant="outline" className="rounded-full w-full font-bold h-12 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">Book Now</Button>
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-5 py-2 rounded-full text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Beyond Cleaning
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">Additional Services</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">Beyond cleaning - we help with cooking, childcare, laundry, and more.</p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {additionalServices.map((service, index) => (
              <AnimatedSection key={index} delay={index * 80}>
                <div className="bg-card p-5 md:p-6 rounded-2xl shadow-sm border border-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group cursor-default hover:-translate-y-2 h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white group-hover:rotate-6 transition-all duration-500">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold mb-1 text-sm md:text-base tracking-tight group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-primary font-bold mb-2 text-sm md:text-base">{service.price}</p>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 md:py-32 bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image src="/images/icon-bg-pattern-01.png" alt="Pattern" fill className="object-cover mix-blend-overlay" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {trustIndicators.map((item, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <div className="text-center group cursor-default">
                  <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <item.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/icon-bg-pattern-01.png" alt="Pattern" fill className="object-cover" />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Ready to Get Started?</h2>
            <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              Contact us today for a custom quote or to book any of our services.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="rounded-full px-10 md:px-12 py-6 md:py-7 text-base md:text-lg text-primary font-bold shadow-2xl hover:scale-105 transition-all duration-300 hover:shadow-white/20">
                Book Now <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}

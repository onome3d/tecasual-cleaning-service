"use client";

import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Home,
  Building2,
  Bug,
  Shirt,
  ShoppingBag,
  Utensils,
  Baby,
  Bath,
  CheckCircle2,
  Heart,
  Calendar,
  Check,
} from "lucide-react";
import { useEffect, useRef } from "react";

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            setTimeout(() => entry.target.classList.add("animate-in"), delay);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);
  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 ${className}`}
    >
      {children}
    </div>
  );
}

const services = [
  {
    id: "residential",
    title: "Residential Cleaning",
    description:
      "Transform your home into a sanctuary with our meticulous residential cleaning services.",
    features: [
      "Deep cleaning of all rooms",
      "Kitchen & bathroom sanitization",
      "Dusting & vacuuming",
      "Interior window cleaning",
      "Bed making & linen changing",
    ],
    image: "/images/img- (13).jpg",
    icon: Home,
  },
  {
    id: "commercial",
    title: "Commercial Cleaning",
    description:
      "Create a pristine work environment that impresses clients and boosts employee productivity.",
    features: [
      "Office space cleaning",
      "Restroom sanitization",
      "Common area maintenance",
      "Waste management",
      "Floor care & polishing",
    ],
    image: "/images/img- (14).jpg",
    icon: Building2,
  },
  {
    id: "fumigation",
    title: "Fumigation & Pest Control",
    description:
      "Protect your property from pests with our safe and effective fumigation treatments.",
    features: [
      "Comprehensive pest inspection",
      "Eco-friendly treatments",
      "Rodent control",
      "Insect extermination",
      "Preventive measures",
    ],
    image: "/images/img- (18).jpg",
    icon: Bug,
  },
];

const lifestyleServices = [
  {
    id: "culinary",
    title: "Culinary Services",
    description:
      "Enjoy delicious, home-cooked meals prepared by our professional chefs.",
    features: [
      "Personal Chef Service",
      "Meal Preparation",
      "Event Catering",
      "Menu Planning",
      "Dietary Specialization",
    ],
    image: "/images/img- (22).jpg",
    icon: Utensils,
  },
  {
    id: "nanny",
    title: "Nanny Services",
    description:
      "Trusted childcare professionals to care for your little ones with love.",
    features: [
      "Full-time/Part-time Nanny",
      "After-school Care",
      "Weekend Babysitting",
      "Newborn Care",
      "Educational Activities",
    ],
    image: "/images/img- (51).jpg",
    icon: Baby,
  },
  {
    id: "laundry",
    title: "Laundry Services",
    description:
      "Professional laundry and ironing services to keep your wardrobe fresh.",
    features: [
      "Wash & Fold",
      "Ironing & Pressing",
      "Delicate Care",
      "Same-day Service",
      "Pickup & Delivery",
    ],
    image: "/images/img- (30).jpg",
    icon: Shirt,
  },
  {
    id: "dishes",
    title: "Dish Washing",
    description:
      "Let us handle the dishes! Perfect for daily needs or after events.",
    features: [
      "Daily Dish Washing",
      "Event Cleanup",
      "Kitchen Sanitization",
      "Utensil Organization",
      "Deep Kitchen Clean",
    ],
    image: "/images/img- (41).jpg",
    icon: Bath,
  },
  {
    id: "errands",
    title: "Errands & Assistance",
    description: "We run your errands so you can focus on what matters most.",
    features: [
      "Grocery Shopping",
      "Bill Payments",
      "Package Pickup/Delivery",
      "Personal Shopping",
      "General Assistance",
    ],
    image: "/images/img- (50).jpg",
    icon: ShoppingBag,
  },
  {
    id: "specialized",
    title: "Specialized Cleaning",
    description:
      "Tailored cleaning solutions for unique requirements and occasions.",
    features: [
      "Post-Construction Clean",
      "Event Cleanup",
      "Deep Sanitization",
      "Carpet & Upholstery",
      "Window Cleaning",
    ],
    image: "/images/img- (42).jpg",
    icon: Sparkles,
  },
];

const steps = [
  {
    title: "Book Online",
    desc: "Select your service and preferred time.",
    icon: Calendar,
  },
  {
    title: "We Confirm",
    desc: "Receive instant confirmation & details.",
    icon: CheckCircle2,
  },
  {
    title: "We Clean",
    desc: "Our expert team arrives and works magic.",
    icon: Sparkles,
  },
  {
    title: "You Relax",
    desc: "Enjoy your pristine, comfortable home.",
    icon: Heart,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/img- (13).jpg"
            alt="Services Background"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse hidden md:block" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-white/90 text-xs font-semibold mb-8 border border-white/20 animate-fade-in"
              style={{ animationDelay: "0.2s", animationFillMode: "both" }}
            >
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="tracking-[0.2em] uppercase">Our Services</span>
            </div>
            <h1
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight animate-fade-in"
              style={{ animationDelay: "0.4s", animationFillMode: "both" }}
            >
              Comprehensive Care for{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary/80 to-accent inline-block">
                Your Lifestyle
              </span>
            </h1>
            <p
              className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto font-light tracking-wide animate-fade-in"
              style={{ animationDelay: "0.6s", animationFillMode: "both" }}
            >
              From deep cleaning to daily management, we provide a full suite of
              services designed to give you back your time.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 -mt-20 relative z-20">
        <div className="container mx-auto px-4 md:px-15">
          <div className="space-y-40">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div
                  className={`flex flex-col lg:flex-row gap-16 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="lg:w-1/2 relative group">
                    <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] -rotate-3 group-hover:rotate-0 transition-transform duration-700" />
                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-4/3 group-hover:shadow-primary/20 transition-shadow duration-500">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div
                      className={`absolute -bottom-8 ${
                        index % 2 === 1 ? "-left-8" : "-right-8"
                      } bg-white dark:bg-card p-6 rounded-2xl shadow-xl hidden md:block border border-border/50`}
                    >
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-2">
                        <service.icon className="w-8 h-8" />
                      </div>
                      <div className="font-bold text-lg tracking-tight">
                        Top Rated
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2 space-y-8">
                    <div className="inline-flex items-center gap-2 bg-primary/10 px-5 py-2 rounded-full text-primary text-xs font-bold tracking-[0.2em] uppercase">
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      {service.title}
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                      {service.description}
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      Experience the highest standard of cleanliness with our
                      professional {service.title.toLowerCase()} services. We
                      pay attention to every detail so you don&apos;t have to.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-4 p-4 rounded-2xl bg-secondary/30 hover:bg-primary/10 transition-all duration-300 group/item cursor-default hover:-translate-y-1"
                        >
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary mt-0.5 group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                            <Check className="w-4 h-4" />
                          </div>
                          <span className="font-semibold text-lg tracking-tight">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4">
                      <Link href="/contact">
                        <Button
                          size="lg"
                          className="rounded-full px-10 h-14 text-lg font-bold shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
                        >
                          Book {service.title}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/icon-bg-pattern-01.png"
            alt="Pattern"
            fill
            className="object-cover mix-blend-overlay"
          />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container relative z-10 mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-5 py-2 rounded-full text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Beyond Cleaning
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Lifestyle Management
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              We handle the daily tasks so you can focus on what matters most.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lifestyleServices.map((service, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-card rounded-[2.5rem] overflow-hidden border border-border/50 shadow-xl group hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                      <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-4 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                        <service.icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8 flex-1">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-foreground/80"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button
                        variant="outline"
                        className="w-full rounded-full h-12 font-bold border-2 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              How It Works
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Simple steps to a cleaner, happier home.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 hidden md:block z-0" />
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="relative z-10 bg-background p-8 rounded-3xl text-center group cursor-default">
                  <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg border-4 border-background group-hover:rotate-6">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/icon-bg-pattern-01.png"
            alt="Pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
              Ready to Transform Your Home?
            </h2>
            <p className="text-xl md:text-2xl opacity-80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Join hundreds of satisfied clients who trust TECASUAL for their
              home and lifestyle needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full px-12 py-7 text-lg text-primary font-bold shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Book a Service
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-12 py-7 text-lg bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
    </main>
  );
}

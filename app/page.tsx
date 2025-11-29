"use client";

import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Star,
  Shield,
  Clock,
  Heart,
  Sparkles,
  Home,
  Building2,
  Baby,
  UtensilsCrossed,
  Bug,
  Shirt,
  Quote,
  Users,
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

const serviceCategories = [
  {
    title: "Residential Cleaning",
    image: "/images/img- (1).jpg",
    desc: "Apartments, duplexes, and mansions",
    icon: Home,
  },
  {
    title: "Commercial Services",
    image: "/images/img- (20).jpg",
    desc: "Offices, hotels, and organizations",
    icon: Building2,
  },
  {
    title: "Fumigation",
    image: "/images/img- (5).jpg",
    desc: "3 & 6 month protection plans",
    icon: Bug,
  },
  {
    title: "Nanny Services",
    image: "/images/img- (25).jpg",
    desc: "Part-time & sleep-over care",
    icon: Baby,
  },
  {
    title: "Culinary Services",
    image: "/images/img- (40).jpg",
    desc: "Professional cooking & meal prep",
    icon: UtensilsCrossed,
  },
  {
    title: "Laundry & More",
    image: "/images/img- (7).jpg",
    desc: "Laundry, dishes, and errands",
    icon: Shirt,
  },
];

const galleryImages = [
  "/images/img- (2).jpg",
  "/images/img- (3).jpg",
  "/images/img- (4).jpg",
  "/images/img- (7).jpg",
  "/images/img- (8).jpg",
  "/images/img- (9).jpg",
  "/images/img- (13).jpg",
  "/images/img- (14).jpg",
];

const testimonials = [
  {
    name: "Mrs. Adebayo",
    role: "Homeowner, Lagos",
    text: "TECASUAL transformed my home! Their attention to detail is unmatched. I've been on their monthly plan for 6 months now.",
    image: "/images/img- (21).jpg",
  },
  {
    name: "Mr. Okonkwo",
    role: "Business Owner",
    text: "Our office has never looked better. The commercial cleaning team is professional and thorough. Highly recommended!",
    image: "/images/img- (22).jpg",
  },
  {
    name: "Mrs. Ibrahim",
    role: "Working Mother",
    text: "The nanny service has been a lifesaver. Trustworthy, caring, and my kids absolutely love her!",
    image: "/images/img- (23).jpg",
  },
];

const subscriptionPlans = [
  { name: "Monthly", savings: "", popular: false },
  { name: "3 Months", savings: "Save 10%", popular: true },
  { name: "6 Months", savings: "Save 17%", popular: false },
  { name: "1 Year", savings: "Save 25%", popular: false },
];

const stats = [
  { value: "800+", label: "Happy Clients", icon: Users },
  { value: "5+", label: "Years Experience", icon: Clock },
  { value: "50+", label: "Team Members", icon: Shield },
  { value: "100%", label: "Satisfaction", icon: Star },
];

const features = [
  {
    icon: Shield,
    title: "Trusted & Vetted",
    desc: "Background-checked professionals",
  },
  {
    icon: Clock,
    title: "Always On Time",
    desc: "Punctual and reliable service",
  },
  {
    icon: Heart,
    title: "Passionate Care",
    desc: "We treat your home like ours",
  },
  { icon: Star, title: "5-Star Quality", desc: "Excellence in every detail" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/img- (10).jpg"
            alt="TECASUAL Hero"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent" />
        </div>
        <div className="absolute bottom-40 right-10 w-32 h-32 bg-primary/30 rounded-full blur-2xl animate-pulse hidden md:block" />
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-bounce hidden md:block"
          style={{ animationDuration: "4s" }}
        />

        <div className="relative z-10 container mx-auto px-4 pt-20">
          <div className="max-w-4xl">
            <div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-white/90 text-xs font-semibold mb-8 border border-white/20 animate-fade-in tracking-[0.15em] uppercase"
              style={{ animationDelay: "0.2s", animationFillMode: "both" }}
            >
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              Premium Cleaning & Lifestyle Services
            </div>

            <h1
              className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-white leading-[1.1] tracking-tight animate-fade-in"
              style={{ animationDelay: "0.4s", animationFillMode: "both" }}
            >
              Your Home, <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary/80 to-accent inline-block">
                Our Passion
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl md:text-2xl mb-10 md:mb-12 text-white/80 leading-relaxed max-w-2xl font-light animate-fade-in"
              style={{ animationDelay: "0.6s", animationFillMode: "both" }}
            >
              TECASUAL delivers exceptional cleaning, fumigation, nanny
              services, cooking, and more. Experience the difference of
              professional care.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in"
              style={{ animationDelay: "0.8s", animationFillMode: "both" }}
            >
              <Link href="/services">
                <Button
                  size="lg"
                  className="rounded-full px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105 hover:shadow-primary/40 w-full sm:w-auto"
                >
                  Explore Services <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg bg-white/5 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section - Floating Cards */}
        <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1/2 hidden lg:block">
          <div className="container mx-auto px-4">
            <div className="bg-white/95 dark:bg-card/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 xl:p-10 grid grid-cols-4 gap-6 xl:gap-8 border border-white/20 dark:border-border/50">
              {stats.map((stat, i) => (
                <div key={i} className="text-center group cursor-default">
                  <div className="mb-3 flex justify-center">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <stat.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="text-3xl xl:text-4xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.15em]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Stats */}
      <section className="py-12 bg-primary text-primary-foreground lg:hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold mb-1 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold uppercase tracking-[0.1em] opacity-80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 pt-8 lg:pt-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-4 md:space-y-6 mt-8 md:mt-12">
                  <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
                    <Image
                      src="/images/img- (16).jpg"
                      alt="Cleaning service"
                      width={300}
                      height={256}
                      className="w-full h-48 md:h-64 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
                    <Image
                      src="/images/img- (17).jpg"
                      alt="Professional team"
                      width={300}
                      height={320}
                      className="w-full h-56 md:h-80 object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
                    <Image
                      src="/images/img- (18).jpg"
                      alt="Happy home"
                      width={300}
                      height={320}
                      className="w-full h-56 md:h-80 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
                    <Image
                      src="/images/img- (19).jpg"
                      alt="Quality service"
                      width={300}
                      height={256}
                      className="w-full h-48 md:h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-card p-5 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl text-center border border-border/50 hidden sm:block">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-1 tracking-tight">
                  5+
                </div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.1em]">
                  Years of
                  <br />
                  Excellence
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection
              delay={200}
              className="space-y-8 md:space-y-10 order-1 lg:order-2"
            >
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 px-5 py-2 rounded-full text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  About TECASUAL
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
                  We Make Your Life <span className="text-primary">Easier</span>
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  TECASUAL {"{cleaning service}"} is your complete home and
                  lifestyle management partner. From sparkling clean homes to
                  professional nanny services, delicious home-cooked meals to
                  reliable errand running - we handle it all so you can focus on
                  what matters most.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                {features.map((feature, i) => (
                  <div key={i} className="flex gap-4 group cursor-default">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white dark:bg-card shadow-sm border border-border flex items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                      <feature.icon className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base md:text-lg mb-1 group-hover:text-primary transition-colors tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 md:pt-4">
                <Link href="/about">
                  <Button
                    size="lg"
                    className="rounded-full px-8 md:px-10 h-12 md:h-14 text-base font-bold hover:scale-105 transition-all duration-300"
                  >
                    Learn More About Us <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-5 py-2 rounded-full text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Our Services
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Complete Home & Lifestyle Solutions
            </h2>
            <p className="text-muted-foreground text-base md:text-xl leading-relaxed">
              From cleaning to cooking, childcare to errands - we&apos;ve got
              you covered with our comprehensive range of services.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {serviceCategories.map((service, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="group relative rounded-2xl md:rounded-[2rem] overflow-hidden aspect-[4/5] shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 cursor-pointer">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-white">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 md:mb-6 transform group-hover:-translate-y-2 group-hover:rotate-6 transition-all duration-500">
                      <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3 transform group-hover:-translate-y-1 transition-transform duration-300 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-white/80 text-base md:text-lg mb-6 md:mb-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                      {service.desc}
                    </p>
                    <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                      <Link href="/services">
                        <Button
                          variant="outline"
                          className="rounded-full border-primary text-primary hover:bg-primary hover:text-white w-full h-11 md:h-12 text-sm md:text-base font-semibold"
                        >
                          Learn More <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12 md:mt-16">
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-10 md:px-12 h-12 md:h-14 text-base md:text-lg border-2 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 font-bold"
              >
                View All Services <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Subscription Plans Preview */}
      <section className="py-20 md:py-32 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/images/icon-bg-pattern-01.png"
            alt="Pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full text-white/90 text-xs font-bold tracking-[0.2em] uppercase mb-8">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Subscription Plans
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1] tracking-tight">
                Flexible Payment Plans for Every Need
              </h2>
              <p className="text-lg md:text-xl text-white/70 mb-8 md:mb-10 leading-relaxed font-light">
                Choose from our subscription options and enjoy consistent,
                reliable service at great value. The longer you commit, the more
                you save!
              </p>

              <div className="grid grid-cols-2 gap-4 md:gap-5 mb-10 md:mb-12">
                {subscriptionPlans.map((plan, i) => (
                  <div
                    key={i}
                    className={`p-5 md:p-6 rounded-2xl border transition-all duration-500 hover:-translate-y-2 cursor-default ${
                      plan.popular
                        ? "bg-primary border-primary shadow-lg shadow-primary/20"
                        : "bg-white/5 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    <div className="font-bold text-lg md:text-xl mb-1 tracking-tight">
                      {plan.name}
                    </div>
                    {plan.savings ? (
                      <div
                        className={`text-sm font-semibold ${
                          plan.popular ? "text-white/90" : "text-primary"
                        }`}
                      >
                        {plan.savings}
                      </div>
                    ) : (
                      <div className="text-sm text-white/40">Standard Rate</div>
                    )}
                  </div>
                ))}
              </div>

              <Link href="/pricing">
                <Button
                  size="lg"
                  className="rounded-full px-10 h-12 md:h-14 text-base md:text-lg bg-white text-black hover:bg-white/90 font-bold hover:scale-105 transition-all duration-300"
                >
                  View Full Pricing <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={200} className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-primary/20 rounded-[2.5rem] rotate-3 blur-xl" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/img- (41).jpg"
                  alt="Happy customer"
                  width={600}
                  height={500}
                  className="w-full transform hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary text-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl">
                <div className="text-4xl md:text-5xl font-bold mb-1 tracking-tight">
                  25%
                </div>
                <div className="text-xs font-semibold opacity-90 uppercase tracking-[0.1em]">
                  Save on
                  <br />
                  Annual Plan
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-5 py-2 rounded-full text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Our Work
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              See the TECASUAL Difference
            </h2>
            <p className="text-muted-foreground text-base md:text-xl leading-relaxed">
              A glimpse into the quality and care we bring to every job.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {galleryImages.map((img, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <div
                  className={`relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg group cursor-pointer hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 ${
                    i === 0 || i === 5 ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Gallery ${i + 1}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 flex items-center justify-center shadow-xl">
                      <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-5 py-2 rounded-full text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Testimonials
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground text-base md:text-xl leading-relaxed">
              Don&apos;t just take our word for it - hear from our satisfied
              customers.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="bg-card rounded-2xl md:rounded-[2rem] p-6 md:p-10 shadow-lg border border-border/50 relative hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 h-full group">
                  <Quote className="w-12 h-12 md:w-16 md:h-16 text-primary/10 absolute top-6 md:top-8 right-6 md:right-8 group-hover:text-primary/20 transition-colors" />
                  <div className="flex items-center gap-4 md:gap-5 mb-6 md:mb-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-md" />
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="relative w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-background"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-base md:text-lg tracking-tight">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-primary font-semibold">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 md:w-5 md:h-5 fill-orange-400 text-orange-400"
                      />
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/img- (25).jpg"
            alt="CTA Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <AnimatedSection>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight leading-[1.1]">
              Ready to Experience
              <br className="hidden sm:block" /> the Difference?
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl opacity-80 mb-10 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Join hundreds of satisfied clients who trust TECASUAL for their
              home and lifestyle needs. Book your first service today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="rounded-full px-10 md:px-12 py-6 md:py-8 text-base md:text-xl font-bold bg-white text-primary hover:bg-white/90 shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                >
                  Book Now
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-10 md:px-12 py-6 md:py-8 text-base md:text-xl bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 w-full sm:w-auto"
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

"use client";

import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Users,
  Target,
  Heart,
  Award,
  CheckCircle2,
  Shield,
  Clock,
  Star,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef } from "react";

const stats = [
  { value: "800+", label: "Happy Clients" },
  { value: "50+", label: "Team Members" },
  { value: "5+", label: "Years of Excellence" },
  { value: "100%", label: "Satisfaction Guarantee" },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide top-tier home and lifestyle services that enable our clients to reclaim their time and enjoy a pristine living environment.",
  },
  {
    icon: Heart,
    title: "Our Passion",
    description:
      "We love what we do. Every clean home, every delicious meal, and every satisfied client drives us to be better every day.",
  },
  {
    icon: Users,
    title: "Our Team",
    description:
      "Our staff are rigorously vetted, trained, and insured. We treat our team with respect, so they treat your home with respect.",
  },
  {
    icon: Award,
    title: "Quality First",
    description:
      "We never compromise on quality. From the products we use to the techniques we employ, excellence is our standard.",
  },
];

const teamMembers = [
  {
    name: "Adaeze Okafor",
    role: "Founder & CEO",
    image: "/images/img- (46).png",
  },
  {
    name: "Chukwuemeka Eze",
    role: "Operations Manager",
    image: "/images/img- (47).png",
  },
  {
    name: "Fatima Bello",
    role: "Head of Cleaning",
    image: "/images/img- (48).png",
  },
  {
    name: "Oluwaseun Adeyemi",
    role: "Customer Relations",
    image: "/images/img- (49).png",
  },
];

const milestones = [
  {
    year: "2020",
    title: "Founded",
    description: "TECASUAL started with a small team of 5 passionate cleaners.",
  },
  {
    year: "2021",
    title: "Expansion",
    description: "Grew to 20+ team members and added lifestyle services.",
  },
  {
    year: "2022",
    title: "500 Clients",
    description: "Reached our first major milestone of 500 happy clients.",
  },
  {
    year: "2023",
    title: "Full Service",
    description:
      "Launched complete home management including nanny and cooking services.",
  },
  {
    year: "2024",
    title: "800+ Clients",
    description:
      "Continued growth with subscription plans and corporate contracts.",
  },
];


function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in");
            }, delay);
          }
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

function CountUp({ target, suffix = "" }: { target: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const numericValue = parseInt(target.replace(/\D/g, ""));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && ref.current) {
            let current = 0;
            const increment = numericValue / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= numericValue) {
                if (ref.current) ref.current.textContent = target;
                clearInterval(timer);
              } else {
                if (ref.current) ref.current.textContent = Math.floor(current) + suffix;
              }
            }, 30);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numericValue, target, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/img- (12).png"
            alt="About Us Background"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl">
            <div 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-white/90 text-sm font-medium mb-8 border border-white/20 animate-fade-in"
              style={{ animationDelay: "0.2s", animationFillMode: "both" }}
            >
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="tracking-widest uppercase text-xs">About Us</span>
            </div>
            <h1 
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight animate-fade-in"
              style={{ animationDelay: "0.4s", animationFillMode: "both" }}
            >
              More Than Just <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary/80 to-accent inline-block">
                Cleaning
              </span>
            </h1>
            <p 
              className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl font-light tracking-wide animate-fade-in"
              style={{ animationDelay: "0.6s", animationFillMode: "both" }}
            >
              TECASUAL {"{cleaning service}"} is your complete home and
              lifestyle management partner. We&apos;re dedicated to making your life
              easier, one service at a time.
            </p>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse hidden md:block" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-bounce hidden md:block" style={{ animationDuration: "3s" }} />
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-primary text-primary-foreground relative z-20 -mt-10 mx-4 md:mx-10 rounded-3xl shadow-2xl overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/icon-bg-pattern-01.png" alt="Pattern" fill className="object-cover mix-blend-overlay" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center px-4 group hover:-translate-y-2 transition-all duration-500 cursor-default"
              >
                <div className="text-4xl md:text-6xl font-bold mb-2 tracking-tight group-hover:scale-110 transition-transform duration-300">
                  <CountUp target={stat.value} suffix={stat.value.includes("+") ? "+" : stat.value.includes("%") ? "%" : ""} />
                </div>
                <div className="text-xs md:text-sm font-semibold opacity-80 uppercase tracking-[0.2em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Our Story */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-15">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection className="relative">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 hover:shadow-primary/20">
                <Image
                  src="/images/img- (6).png"
                  alt="Our Team"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 w-2/3 rounded-4xl overflow-hidden shadow-2xl border-8 border-background hidden md:block transform hover:scale-105 transition-transform duration-500 delay-100">
                <Image
                  src="/images/img- (7).png"
                  alt="Cleaning in action"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute top-12 -left-12 bg-white dark:bg-card p-8 rounded-3xl shadow-2xl hidden md:block border border-border/50 hover:shadow-primary/20 transition-shadow duration-500">
                <div className="text-5xl font-black text-primary mb-1 tracking-tight">5+</div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-[0.15em]">
                  Years of<br />Excellence
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200} className="space-y-10">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 px-5 py-2 rounded-full text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Our Story
                </div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-8 tracking-tight">
                  Redefining Home Services in Nigeria
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Founded with a simple vision: to bring professional, reliable,
                  and high-quality services to every home. TECASUAL{" "}
                  {"{cleaning service}"} started as a small team of passionate
                  cleaners and has grown into a comprehensive lifestyle
                  management company.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We understand that modern life is busy. Between work, family,
                  and personal commitments, keeping a home pristine can be a
                  challenge. That&apos;s where we come in. We handle the chores, the
                  cooking, the errands, and the care, so you can focus on living
                  your best life.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, text: "Vetted & Insured" },
                  { icon: Clock, text: "Always On Time" },
                  { icon: Heart, text: "Passionate Care" },
                  { icon: Star, text: "5-Star Quality" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-5 bg-secondary/30 rounded-2xl hover:bg-primary/10 transition-all duration-300 group cursor-default hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-foreground text-sm tracking-wide">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-32 bg-secondary/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-4 md:px-15 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-5 py-2 rounded-full text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Our Values
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              The Principles That Guide Us
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Everything we do is driven by our commitment to excellence and care.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-card p-8 rounded-3xl border border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group hover:-translate-y-3 h-full">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* Timeline */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-5 py-2 rounded-full text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Our Journey
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Growing Together
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              From humble beginnings to becoming a trusted name in home services.
            </p>
          </AnimatedSection>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-primary/30 to-transparent hidden md:block" />
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <AnimatedSection key={index} delay={index * 150}>
                  <div
                    className={`flex flex-col md:flex-row gap-8 items-center ${
                      index % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 1 ? "md:text-left" : "md:text-right"}`}>
                      <div className="bg-card p-8 rounded-3xl border border-border/50 shadow-lg inline-block hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 max-w-md group hover:-translate-y-2">
                        <div className="text-primary font-black text-3xl mb-3 tracking-tight group-hover:scale-110 transition-transform origin-left inline-block">
                          {milestone.year}
                        </div>
                        <h3 className="text-2xl font-bold mb-3 tracking-tight">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    <div className="w-5 h-5 rounded-full bg-primary border-4 border-background relative z-10 hidden md:block shadow-lg shadow-primary/30 group-hover:scale-150 transition-transform" />
                    <div className="flex-1" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image src="/images/icon-bg-pattern-01.png" alt="Pattern" fill className="object-cover" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full text-white/90 text-xs font-bold tracking-[0.2em] uppercase mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Our Team
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Meet the People Behind TECASUAL
            </h2>
            <p className="text-white/60 text-xl leading-relaxed">
              Dedicated professionals committed to making your life easier.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="text-center group cursor-pointer">
                  <div className="relative rounded-3xl overflow-hidden mb-8 aspect-3/4 shadow-2xl">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-white/50 font-semibold uppercase tracking-[0.15em] text-xs">
                    {member.role}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* Gallery */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Our Work in Action
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              A glimpse into the quality and care we bring to every job.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              "/images/img- (8).png",
              "/images/img- (9).png",
              "/images/img- (13).png",
              "/images/img- (14).png",
              "/images/img- (16).png",
              "/images/img- (17).png",
              "/images/img- (18).png",
              "/images/img- (19).png",
            ].map((img, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden aspect-square group cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2">
                  <Image
                    src={img}
                    alt={`Gallery ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-xl">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us CTA */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/icon-bg-pattern-01.png" alt="Pattern" fill className="object-cover" />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1] tracking-tight">
                Why Choose TECASUAL?
              </h2>
              <p className="text-xl opacity-80 mb-10 leading-relaxed font-light">
                We are not just another cleaning company. We are a team of
                dedicated professionals committed to excellence.
              </p>
              <ul className="space-y-5 mb-12">
                {[
                  "Vetted and Insured Professionals",
                  "Eco-Friendly Cleaning Products",
                  "Customized Service Plans",
                  "100% Satisfaction Guarantee",
                  "Flexible Scheduling (Weekends & Holidays)",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-medium tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full px-10 py-7 text-lg text-primary font-bold shadow-2xl hover:scale-105 transition-all duration-300 hover:shadow-white/20"
                >
                  Join Our Family
                </Button>
              </Link>
            </AnimatedSection>
            
            <AnimatedSection delay={200} className="relative">
              <div className="absolute -inset-4 bg-white/10 rounded-[2.5rem] -rotate-3 blur-xl" />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl hover:shadow-white/20 transition-shadow duration-500">
                <Image
                  src="/images/img- (51).png"
                  alt="Happy team"
                  width={600}
                  height={500}
                  className="w-full h-auto transform hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

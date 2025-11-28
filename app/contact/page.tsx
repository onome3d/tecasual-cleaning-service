"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Sparkles, CheckCircle2, Instagram, Facebook, Twitter } from "lucide-react";

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

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+234 800 TECASUAL", subValue: "Mon-Fri 8am-6pm, Sat 9am-4pm" },
  { icon: Mail, label: "Email", value: "hello@tecasual.com", subValue: "Online Support 24/7" },
  { icon: MapPin, label: "Office", value: "123 Clean Street, Lagos", subValue: "Visit us for a consultation" },
  { icon: Clock, label: "Working Hours", value: "Mon - Sat: 8am - 6pm", subValue: "Sunday: Emergency Only" },
];

const services = [
  { value: "residential", label: "Residential Cleaning" },
  { value: "commercial", label: "Commercial Cleaning" },
  { value: "fumigation", label: "Fumigation" },
  { value: "nanny", label: "Nanny Service" },
  { value: "cook", label: "Cook / Chef" },
  { value: "laundry", label: "Laundry Service" },
  { value: "dishes", label: "Dish Washing" },
  { value: "errands", label: "Errands" },
  { value: "subscription", label: "Subscription Plan" },
  { value: "other", label: "Other" },
];

const propertyTypes = [
  { value: "1bed", label: "1 Bedroom Apartment" },
  { value: "2bed", label: "2 Bedroom Apartment" },
  { value: "3bed", label: "3 Bedroom Apartment" },
  { value: "duplex", label: "Terrace Duplex" },
  { value: "mansion", label: "Castle / Mansion" },
  { value: "office", label: "Office Space" },
  { value: "church", label: "Church / Religious Center" },
  { value: "hotel", label: "Hotel" },
  { value: "club", label: "Club / Lounge" },
  { value: "estate", label: "Estate" },
  { value: "other", label: "Other" },
];

const faqs = [
  { q: "How do I book a service?", a: "You can book through our contact form, call us directly, or send us a WhatsApp message. We'll respond within 2 hours during business hours." },
  { q: "Are your staff vetted?", a: "Yes! All our team members undergo thorough background checks, training, and are fully insured for your peace of mind." },
  { q: "What areas do you serve?", a: "We currently serve Lagos and surrounding areas. Contact us to check if we cover your location." },
  { q: "Can I reschedule my booking?", a: "Absolutely! You can reschedule up to 24 hours before your appointment at no extra charge." },
];


export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/titlebar-bg-01.jpg" alt="Contact Background" fill className="object-cover scale-105" priority />
          <div className="absolute inset-0 bg-linear-to-b from-background/90 via-background/60 to-background" />
        </div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse hidden md:block" />
        <div className="absolute top-40 left-10 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-bounce hidden md:block" style={{ animationDuration: "4s" }} />

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-md px-5 py-2 rounded-full text-primary text-xs font-bold mb-8 border border-primary/20 animate-fade-in tracking-[0.2em] uppercase" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
              <MessageCircle className="w-4 h-4 animate-pulse" />
              Get in Touch
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 md:mb-8 animate-fade-in tracking-tight leading-[1.1]" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
              Let&apos;s Talk About <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary/80 to-accent inline-block">Your Needs</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed animate-fade-in font-light" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
              Ready to experience the TECASUAL difference? Contact us today for a free consultation or to book your first service.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 md:py-12 -mt-16 md:-mt-20 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {contactInfo.map((item, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-card/90 backdrop-blur-xl rounded-2xl md:rounded-[2rem] p-5 md:p-8 shadow-xl border border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 group h-full">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-4 md:mb-6 text-primary group-hover:bg-primary group-hover:text-white group-hover:rotate-6 transition-all duration-500">
                    <item.icon className="w-5 h-5 md:w-7 md:h-7" />
                  </div>
                  <h3 className="font-bold text-base md:text-xl mb-1 md:mb-2 tracking-tight">{item.label}</h3>
                  <p className="text-primary font-semibold text-sm md:text-lg mb-1">{item.value}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{item.subValue}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Contact Form */}
            <AnimatedSection className="lg:col-span-3">
              <div className="bg-card rounded-2xl md:rounded-[2.5rem] p-6 md:p-8 lg:p-12 border border-border shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                {submitted ? (
                  <div className="text-center py-12 md:py-20 animate-fade-in">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6 md:mb-8">
                      <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12 text-green-600 dark:text-green-400" />
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 tracking-tight">Message Sent!</h2>
                    <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting TECASUAL. We&apos;ll get back to you within 2 hours during business hours.
                    </p>
                    <Button onClick={() => setSubmitted(false)} size="lg" className="rounded-full px-8 md:px-10 h-12 md:h-14 text-base md:text-lg font-bold">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="mb-8 md:mb-10 relative z-10">
                      <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 tracking-tight">Book a Service</h2>
                      <p className="text-muted-foreground text-base md:text-lg leading-relaxed">Fill out the form below and we&apos;ll get back to you within 2 hours.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 relative z-10">
                      <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                        <div className="space-y-2 md:space-y-3">
                          <Label htmlFor="name" className="text-sm md:text-base font-semibold ml-1">Full Name *</Label>
                          <Input id="name" placeholder="Your full name" required className="h-12 md:h-14 rounded-xl md:rounded-2xl bg-secondary/30 border-border/50 focus:bg-background transition-colors text-base md:text-lg px-4 md:px-6" />
                        </div>
                        <div className="space-y-2 md:space-y-3">
                          <Label htmlFor="phone" className="text-sm md:text-base font-semibold ml-1">Phone Number *</Label>
                          <Input id="phone" type="tel" placeholder="+234..." required className="h-12 md:h-14 rounded-xl md:rounded-2xl bg-secondary/30 border-border/50 focus:bg-background transition-colors text-base md:text-lg px-4 md:px-6" />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                        <div className="space-y-2 md:space-y-3">
                          <Label htmlFor="email" className="text-sm md:text-base font-semibold ml-1">Email Address</Label>
                          <Input id="email" type="email" placeholder="your@email.com" className="h-12 md:h-14 rounded-xl md:rounded-2xl bg-secondary/30 border-border/50 focus:bg-background transition-colors text-base md:text-lg px-4 md:px-6" />
                        </div>
                        <div className="space-y-2 md:space-y-3">
                          <Label htmlFor="service" className="text-sm md:text-base font-semibold ml-1">Service Interested In *</Label>
                          <Select required>
                            <SelectTrigger className="h-12 md:h-14 rounded-xl md:rounded-2xl bg-secondary/30 border-border/50 focus:bg-background transition-colors text-base md:text-lg px-4 md:px-6">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((service) => (<SelectItem key={service.value} value={service.value}>{service.label}</SelectItem>))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                        <div className="space-y-2 md:space-y-3">
                          <Label htmlFor="property" className="text-sm md:text-base font-semibold ml-1">Property Type</Label>
                          <Select>
                            <SelectTrigger className="h-12 md:h-14 rounded-xl md:rounded-2xl bg-secondary/30 border-border/50 focus:bg-background transition-colors text-base md:text-lg px-4 md:px-6">
                              <SelectValue placeholder="Select property type" />
                            </SelectTrigger>
                            <SelectContent>
                              {propertyTypes.map((type) => (<SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2 md:space-y-3">
                          <Label htmlFor="date" className="text-sm md:text-base font-semibold ml-1">Preferred Date</Label>
                          <Input id="date" type="date" className="h-12 md:h-14 rounded-xl md:rounded-2xl bg-secondary/30 border-border/50 focus:bg-background transition-colors text-base md:text-lg px-4 md:px-6" />
                        </div>
                      </div>

                      <div className="space-y-2 md:space-y-3">
                        <Label htmlFor="message" className="text-sm md:text-base font-semibold ml-1">Additional Details</Label>
                        <Textarea id="message" placeholder="Tell us more about your needs, special requirements, or questions..." rows={4} className="rounded-xl md:rounded-2xl bg-secondary/30 border-border/50 focus:bg-background transition-colors text-base md:text-lg p-4 md:p-6 resize-none" />
                      </div>

                      <Button type="submit" size="lg" className="w-full rounded-full h-14 md:h-16 text-base md:text-xl font-bold shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-[1.01]" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                        {!isSubmitting && <Send className="ml-3 w-5 h-5 md:w-6 md:h-6" />}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </AnimatedSection>


            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6 md:space-y-10">
              <AnimatedSection delay={100}>
                <div className="relative rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl h-64 md:h-80 group">
                  <Image src="/images/img- (50).png" alt="Customer Support" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex items-end p-6 md:p-8">
                    <p className="text-white font-semibold text-lg md:text-2xl leading-tight">&quot;We&apos;re always happy to hear from you!&quot;</p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="bg-primary text-primary-foreground rounded-2xl md:rounded-[2.5rem] p-6 md:p-10 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <h3 className="text-xl md:text-2xl font-bold font-serif mb-6 md:mb-8 relative z-10 tracking-tight">Quick Contact</h3>
                  <div className="space-y-3 md:space-y-4 mb-8 md:mb-10 relative z-10">
                    <a href="tel:+234800TECASUAL" className="flex items-center gap-4 md:gap-5 p-3 md:p-4 bg-white/10 rounded-xl md:rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/10 hover:-translate-y-1">
                      <Phone className="w-5 h-5 md:w-6 md:h-6" />
                      <div>
                        <div className="font-bold text-base md:text-lg">Call Us</div>
                        <div className="text-xs md:text-sm opacity-80">+234 800 TECASUAL</div>
                      </div>
                    </a>
                    <a href="https://wa.me/234800TECASUAL" className="flex items-center gap-4 md:gap-5 p-3 md:p-4 bg-white/10 rounded-xl md:rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/10 hover:-translate-y-1">
                      <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                      <div>
                        <div className="font-bold text-base md:text-lg">WhatsApp</div>
                        <div className="text-xs md:text-sm opacity-80">Chat with us instantly</div>
                      </div>
                    </a>
                    <a href="mailto:hello@tecasual.com" className="flex items-center gap-4 md:gap-5 p-3 md:p-4 bg-white/10 rounded-xl md:rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/10 hover:-translate-y-1">
                      <Mail className="w-5 h-5 md:w-6 md:h-6" />
                      <div>
                        <div className="font-bold text-base md:text-lg">Email</div>
                        <div className="text-xs md:text-sm opacity-80">hello@tecasual.com</div>
                      </div>
                    </a>
                  </div>
                  <div className="border-t border-white/20 pt-6 md:pt-8 relative z-10">
                    <h4 className="font-semibold mb-4 md:mb-6 text-sm md:text-base">Follow Us</h4>
                    <div className="flex gap-3 md:gap-4">
                      {[Instagram, Facebook, Twitter].map((Icon, i) => (
                        <a key={i} href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110 hover:rotate-6">
                          <Icon className="h-5 w-5 md:h-6 md:w-6" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="bg-secondary/30 rounded-2xl md:rounded-[2.5rem] p-6 md:p-10 border border-border/50">
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                      <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight">Client Portal</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
                    Existing clients can log in to manage bookings, view history, and access exclusive offers.
                  </p>
                  <Button variant="outline" className="w-full rounded-full h-12 md:h-14 text-base md:text-lg border-2 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 font-bold">
                    Access Portal
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-32 bg-secondary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-5 py-2 rounded-full text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              FAQ
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-base md:text-xl leading-relaxed">Quick answers to common questions about our services.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-card rounded-2xl md:rounded-[2rem] p-6 md:p-8 border border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 h-full group">
                  <h3 className="font-bold text-lg md:text-xl mb-3 md:mb-4 text-primary tracking-tight group-hover:text-primary/80 transition-colors">{faq.q}</h3>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* Map / Location Section */}
      <section className="py-16 md:py-32 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 bg-primary/10 px-5 py-2 rounded-full text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Location
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 tracking-tight">Visit Our Office</h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 leading-relaxed font-light">
                We welcome you to visit our office for consultations, to meet our team, or to discuss custom service packages. Walk-ins are welcome during business hours!
              </p>
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start gap-4 md:gap-6 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 text-primary mt-1 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-lg md:text-xl mb-1 tracking-tight">Address</div>
                    <div className="text-muted-foreground text-base md:text-lg">123 Clean Street, Victoria Island, Lagos, Nigeria</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 md:gap-6 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 text-primary mt-1 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Clock className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-lg md:text-xl mb-1 tracking-tight">Business Hours</div>
                    <div className="text-muted-foreground text-base md:text-lg">Monday - Friday: 8am - 6pm</div>
                    <div className="text-muted-foreground text-base md:text-lg">Saturday: 9am - 4pm</div>
                    <div className="text-muted-foreground text-base md:text-lg">Sunday: Emergency Only</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="relative rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl h-80 md:h-[500px] group">
                <Image src="/images/img- (29).png" alt="Our Office Location" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent flex items-end p-6 md:p-10">
                  <div className="text-white">
                    <div className="font-bold text-2xl md:text-3xl mb-2 tracking-tight">TECASUAL Office</div>
                    <div className="opacity-90 text-base md:text-xl">Victoria Island, Lagos</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/icon-bg-pattern-01.png" alt="Pattern" fill className="object-cover" />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 tracking-tight">Ready to Get Started?</h2>
            <p className="text-lg md:text-xl lg:text-2xl opacity-80 mb-10 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Experience the TECASUAL difference today. Book your first service and see why hundreds of clients trust us with their homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a href="tel:+234800TECASUAL">
                <Button size="lg" variant="secondary" className="rounded-full px-10 md:px-12 py-6 md:py-8 text-base md:text-xl text-primary font-bold shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                  <Phone className="mr-2 md:mr-3 w-5 h-5 md:w-6 md:h-6" /> Call Now
                </Button>
              </a>
              <a href="https://wa.me/234800TECASUAL">
                <Button size="lg" variant="outline" className="rounded-full px-10 md:px-12 py-6 md:py-8 text-base md:text-xl bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 w-full sm:w-auto">
                  <MessageCircle className="mr-2 md:mr-3 w-5 h-5 md:w-6 md:h-6" /> WhatsApp Us
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}

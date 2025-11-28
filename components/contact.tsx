"use client";

import type React from "react";
import Image from "next/image";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 1500);
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "(555) 123-4567" },
    { icon: Mail, label: "Email", value: "info@sparklecleaning.com" },
    { icon: MapPin, label: "Address", value: "123 Clean Street, Sparkle City" },
    { icon: Clock, label: "Hours", value: "Mon - Sun: 7AM - 9PM" },
  ];

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to experience the best cleaning service? Contact us today for
            a free quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service Needed</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="home">Home Cleaning</SelectItem>
                      <SelectItem value="office">Office Cleaning</SelectItem>
                      <SelectItem value="deep">Deep Cleaning</SelectItem>
                      <SelectItem value="carpet">Carpet Cleaning</SelectItem>
                      <SelectItem value="move">Move In/Out</SelectItem>
                      <SelectItem value="construction">
                        Post-Construction
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your cleaning needs..."
                  rows={4}
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl overflow-hidden h-48 lg:h-64 relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/v0_image-2-cdtofVtMrknE3PhHwku6l60NwE6Nej.png"
                alt="Contact us"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-primary text-primary-foreground rounded-2xl p-6 space-y-5">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

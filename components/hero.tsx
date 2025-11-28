import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Star } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative pt-28 md:pt-36 pb-20 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Star className="h-4 w-4 fill-current" />
              <span>Your trusted home & office care partner</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight text-balance">
              Complete care for your <span className="text-primary">home</span> & lifestyle
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              From cleaning to cooking, nanny services to laundry - TECASUAL handles it all. Flexible subscription plans
              for homes, offices, and commercial spaces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full px-8 text-base">
                View Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-base bg-transparent">
                Get Free Quote
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              {["Flexible subscriptions", "Home & Office care", "Trusted professionals"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full max-w-[500px] mx-auto aspect-square">
              {/* Green circular outline */}
              <div className="absolute inset-0 rounded-full border-2 border-primary" />

              {/* Circular image container */}
              <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/v0_image-5c8E21lkMcbvGFe5BNO8yTXKEAJzsC.png"
                  alt="Professional cleaning team"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top decorative starburst */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-primary">
                  <path d="M24 0L28 20L48 24L28 28L24 48L20 28L0 24L20 20L24 0Z" fill="currentColor" />
                </svg>
              </div>

              {/* Bottom right decorative asterisk */}
              <div className="absolute -bottom-2 -right-2 z-10">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="text-primary">
                  <path
                    d="M28 0V56M0 28H56M8 8L48 48M48 8L8 48"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Floating stats card */}
              <div className="absolute bottom-8 -left-4 bg-card rounded-2xl shadow-xl p-4 border border-border z-20">
                <p className="text-2xl font-bold text-primary">600+</p>
                <p className="text-sm text-muted-foreground">Houses cleaned</p>
              </div>

              {/* Quick booking badge - repositioned to top right area */}
              <div className="absolute top-12 -right-8 bg-card text-primary rounded-lg px-4 py-2 shadow-lg border border-border">
                <span className="text-sm font-medium">Quick Booking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

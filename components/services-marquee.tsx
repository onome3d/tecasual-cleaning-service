"use client"

import { useEffect, useRef } from "react"

const services = [
  "Cleaning",
  "Fumigation",
  "Cooking",
  "Nanny Services",
  "Laundry",
  "Errands",
  "Dish Washing",
  "School Runs",
]

export function ServicesMarquee() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scroll = scrollRef.current
    if (!scroll) return

    const scrollContent = scroll.querySelector(".scroll-content") as HTMLElement
    if (!scrollContent) return

    let animationId: number
    let position = 0

    const animate = () => {
      position -= 0.5
      if (Math.abs(position) >= scrollContent.offsetWidth / 2) {
        position = 0
      }
      scrollContent.style.transform = `translateX(${position}px)`
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="py-6 bg-foreground overflow-hidden">
      <div ref={scrollRef} className="relative">
        <div className="scroll-content flex gap-8 whitespace-nowrap">
          {[...services, ...services, ...services, ...services].map((service, i) => (
            <span
              key={i}
              className="text-background/80 text-sm font-medium uppercase tracking-wider flex items-center gap-8"
            >
              {service}
              <span className="text-primary">●</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

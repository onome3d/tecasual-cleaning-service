const team = [
  {
    name: "Jack Robinson",
    role: "Lead Cleaner",
    experience: "5 Years",
    image: "professional male cleaner portrait friendly",
  },
  {
    name: "Cynthia Gomez",
    role: "Deep Cleaning Specialist",
    experience: "3 Years",
    image: "professional female cleaner portrait friendly",
  },
  {
    name: "Koride Bello",
    role: "Commercial Cleaner",
    experience: "4 Years",
    image: "professional male cleaner african portrait",
  },
  {
    name: "Taiwo Adeleye",
    role: "Quality Inspector",
    experience: "6 Years",
    image: "professional female cleaner inspector portrait",
  },
]

export function Team() {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground text-lg">
            Professional, trained, and background-checked cleaners you can trust
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={`/.jpg?height=300&width=300&query=${member.image}`}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary mt-1">{member.role}</p>
                <p className="text-xs text-muted-foreground mt-1">{member.experience} experience</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

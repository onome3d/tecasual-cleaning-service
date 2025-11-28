import Image from "next/image";

export function About() {
  const stats = [
    { value: "500+", label: "Happy Clients" },
    { value: "24/7", label: "Support" },
    { value: "100%", label: "Satisfaction" },
  ];

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden relative h-[400px] lg:h-[500px]">
              <Image
                src="/images/attachments-gen-images-v0-image.png"
                alt="Our cleaning team"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-xl">
              <p className="text-3xl font-bold">3+</p>
              <p className="text-sm opacity-90">Years Experience</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              About TECASUAL
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              TECASUAL is your complete home and lifestyle service provider. We
              go beyond cleaning to offer cooking, childcare, laundry, and
              errand services - everything you need to keep your life running
              smoothly.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From 1-bedroom apartments to castles, offices to hotels, we
              service properties of all sizes. Our flexible subscription plans
              (monthly, 3-month, 6-month, and yearly) make quality home care
              accessible and affordable for everyone.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-secondary/50 rounded-xl"
                >
                  <p className="text-2xl sm:text-3xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

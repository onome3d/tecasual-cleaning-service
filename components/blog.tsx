import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "10 Spring Cleaning Tips That Actually Work",
    excerpt:
      "Discover time-saving cleaning strategies that will help you maintain a spotless home.",
    category: "Cleaning Tips",
    date: "March 15, 2025",
    image: "spring cleaning home bright colorful",
  },
  {
    title: "The Benefits of Eco-Friendly Products",
    excerpt:
      "Learn why switching to eco-friendly cleaning products is better for your family.",
    category: "Products",
    date: "May 10, 2025",
    image: "eco friendly cleaning products natural",
  },
  {
    title: "How Often Should You Deep Clean?",
    excerpt:
      "A comprehensive guide to creating the perfect deep cleaning schedule.",
    category: "Maintenance",
    date: "December 5, 2025",
    image: "deep cleaning schedule calendar home",
  },
];

export function Blog() {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Cleaning Tips & Insights
          </h2>
          <p className="text-muted-foreground text-lg">
            Stay updated with the latest cleaning tips and industry insights
            from our experts
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={`/.jpg?height=200&width=400&query=${post.image}`}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-2">
                  {post.date}
                </p>
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full bg-transparent"
          >
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
}

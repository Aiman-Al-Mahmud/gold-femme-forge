import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "5 Benefits of Yoga for Women's Health",
    excerpt: "Discover how regular yoga practice can improve your physical and mental well-being. From stress relief to improved flexibility, yoga offers numerous benefits for women of all ages.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    author: "Nusrat Jahan",
    date: "December 5, 2024",
    category: "Yoga",
  },
  {
    id: 2,
    title: "Getting Started with Strength Training",
    excerpt: "A beginner's guide to strength training for women. Learn the basics of weight lifting and how to build a sustainable workout routine.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
    author: "Fatima Rahman",
    date: "December 1, 2024",
    category: "Fitness",
  },
  {
    id: 3,
    title: "Zumba: Dance Your Way to Fitness",
    excerpt: "Why Zumba is the perfect workout for those who love to dance. Learn how this fun cardio workout can help you burn calories and have fun.",
    image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=800&q=80",
    author: "Sadia Akter",
    date: "November 28, 2024",
    category: "Zumba",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="bg-secondary/30 section-padding">
          <div className="container-custom mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Our <span className="text-primary">Blog</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Tips, insights, and inspiration for your fitness journey.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="section-padding">
          <div className="container-custom mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-card rounded-2xl overflow-hidden shadow-sm card-hover border border-border/50 group"
                >
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <User size={14} />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                    </div>
                    <h2 className="font-display text-xl font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

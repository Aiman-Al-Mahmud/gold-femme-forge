import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "5 Benefits of Yoga for Women's Health",
    excerpt: "Discover how regular yoga practice can improve your physical and mental well-being.",
    content: `
      <p>Yoga has been practiced for thousands of years, and its benefits for women's health are well-documented. Whether you're a beginner or an experienced practitioner, incorporating yoga into your routine can have a profound impact on your overall well-being.</p>
      
      <h3>1. Stress Relief and Mental Clarity</h3>
      <p>One of the most significant benefits of yoga is its ability to reduce stress. Through deep breathing exercises and mindful movement, yoga helps calm the nervous system and reduce cortisol levels. This can lead to improved mental clarity and a more positive outlook on life.</p>
      
      <h3>2. Improved Flexibility and Strength</h3>
      <p>Regular yoga practice gradually increases flexibility and builds muscle strength. This is particularly important for women as it can help prevent injuries and improve posture, especially for those who spend long hours sitting at a desk.</p>
      
      <h3>3. Better Sleep Quality</h3>
      <p>Many women struggle with sleep issues due to hormonal changes, stress, or busy lifestyles. Yoga, especially restorative and gentle practices, can significantly improve sleep quality by relaxing the body and quieting the mind.</p>
      
      <h3>4. Hormonal Balance</h3>
      <p>Certain yoga poses can help regulate the endocrine system, which is responsible for hormone production. This can be particularly beneficial for women experiencing PMS, menopause, or thyroid issues.</p>
      
      <h3>5. Community and Connection</h3>
      <p>Joining a yoga class at Women's Gold Gym provides an opportunity to connect with like-minded women, building a supportive community that encourages your fitness journey.</p>
      
      <p>Ready to experience these benefits? Join our yoga classes at Women's Gold Gym and start your transformation today!</p>
    `,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80",
    author: "Nusrat Jahan",
    date: "December 5, 2024",
    category: "Yoga",
  },
  {
    id: 2,
    title: "Getting Started with Strength Training",
    excerpt: "A beginner's guide to strength training for women.",
    content: `
      <p>Strength training is one of the most effective ways to improve your overall fitness, boost metabolism, and build confidence. Despite common misconceptions, lifting weights won't make you bulky – instead, it will help you build lean muscle and achieve a toned physique.</p>
      
      <h3>Why Women Should Lift Weights</h3>
      <p>Strength training offers numerous benefits including increased bone density, improved metabolism, better posture, and enhanced functional strength for daily activities.</p>
      
      <h3>Getting Started</h3>
      <p>Start with lighter weights and focus on proper form. Our expert trainers at Women's Gold Gym will guide you through each exercise to ensure you're performing movements safely and effectively.</p>
      
      <h3>Key Exercises for Beginners</h3>
      <ul>
        <li>Squats for lower body strength</li>
        <li>Deadlifts for overall power</li>
        <li>Bench press for upper body</li>
        <li>Rows for back strength</li>
        <li>Planks for core stability</li>
      </ul>
      
      <p>Remember, consistency is key. Start slow, stay dedicated, and you'll see amazing results!</p>
    `,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&q=80",
    author: "Fatima Rahman",
    date: "December 1, 2024",
    category: "Fitness",
  },
  {
    id: 3,
    title: "Zumba: Dance Your Way to Fitness",
    excerpt: "Why Zumba is the perfect workout for those who love to dance.",
    content: `
      <p>Zumba combines Latin and international music with dance moves, creating a fun and effective workout that doesn't feel like exercise at all. It's perfect for women who want to burn calories while having a blast!</p>
      
      <h3>Benefits of Zumba</h3>
      <ul>
        <li>Burns 400-600 calories per session</li>
        <li>Improves cardiovascular health</li>
        <li>Boosts mood and reduces stress</li>
        <li>Enhances coordination and rhythm</li>
        <li>Creates a fun social atmosphere</li>
      </ul>
      
      <h3>What to Expect in a Zumba Class</h3>
      <p>Our Zumba classes at Women's Gold Gym are designed for all fitness levels. You'll move to energetic music, following simple dance moves that anyone can learn. No dance experience required!</p>
      
      <p>Join our Zumba sessions twice a week and experience the joy of dancing your way to a healthier you!</p>
    `,
    image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=1200&q=80",
    author: "Sadia Akter",
    date: "November 28, 2024",
    category: "Zumba",
  },
];

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-24 pb-16 section-padding">
          <div className="container-custom mx-auto text-center">
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">
              Post Not Found
            </h1>
            <Link to="/blog">
              <Button variant="default">Back to Blog</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero Image */}
        <div className="relative h-[50vh] min-h-[400px]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 max-w-4xl">
              <span className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full">
                {post.category}
              </span>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-card mt-4">
                {post.title}
              </h1>
              <div className="flex items-center justify-center gap-4 text-card/80 mt-4">
                <span className="flex items-center gap-1">
                  <User size={16} />
                  {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={16} />
                  {post.date}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <section className="section-padding">
          <div className="container-custom mx-auto max-w-3xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
              <ArrowLeft size={18} />
              Back to Blog
            </Link>
            
            <article
              className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

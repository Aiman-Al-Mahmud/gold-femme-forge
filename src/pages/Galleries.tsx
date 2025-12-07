import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const photos = [
  { id: 1, src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80", alt: "Gym training" },
  { id: 2, src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80", alt: "Fitness class" },
  { id: 3, src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80", alt: "Yoga session" },
  { id: 4, src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80", alt: "Group workout" },
  { id: 5, src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80", alt: "Aerobics" },
  { id: 6, src: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=600&q=80", alt: "Zumba class" },
];

const videos = [
  { id: 1, src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Yoga Session Highlights" },
  { id: 2, src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Zumba Class Fun" },
];

export default function Galleries() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="bg-secondary/30 section-padding">
          <div className="container-custom mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Our <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Take a look inside Women's Gold Gym and see our amazing community in action.
            </p>
          </div>
        </section>

        {/* Gallery */}
        <section className="section-padding">
          <div className="container-custom mx-auto">
            <Tabs defaultValue="photos" className="w-full">
              <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-8">
                <TabsTrigger value="photos">Photos</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
              </TabsList>

              <TabsContent value="photos">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {photos.map((photo) => (
                    <div
                      key={photo.id}
                      className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                      onClick={() => setSelectedImage(photo.src)}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors" />
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="videos">
                <div className="grid md:grid-cols-2 gap-6">
                  {videos.map((video) => (
                    <div key={video.id} className="rounded-xl overflow-hidden shadow-lg">
                      <div className="aspect-video">
                        <iframe
                          src={video.src}
                          title={video.title}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      <div className="bg-card p-4">
                        <h3 className="font-semibold text-foreground">{video.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-[90vh] rounded-lg"
            />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

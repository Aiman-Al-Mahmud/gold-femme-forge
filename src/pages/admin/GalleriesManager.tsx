import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

export default function GalleriesManager() {
  const [photos, setPhotos] = useState<string[]>([]);
  const [videos, setVideos] = useState<string[]>([]);
  const [newPhotoUrl, setNewPhotoUrl] = useState("");
  const [newVideoUrl, setNewVideoUrl] = useState("");

  const handleAddPhoto = () => {
    if (!newPhotoUrl) {
      toast.error("Please enter a photo URL");
      return;
    }
    setPhotos([...photos, newPhotoUrl]);
    setNewPhotoUrl("");
    toast.success("Photo added");
  };

  const handleAddVideo = () => {
    if (!newVideoUrl) {
      toast.error("Please enter a video URL");
      return;
    }
    setVideos([...videos, newVideoUrl]);
    setNewVideoUrl("");
    toast.success("Video added");
  };

  const handleDeletePhoto = (index: number) => {
    setPhotos(photos.filter((_, i) => i !== index));
    toast.success("Photo removed");
  };

  const handleDeleteVideo = (index: number) => {
    setVideos(videos.filter((_, i) => i !== index));
    toast.success("Video removed");
  };

  return (
    <div>
      <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
        Gallery Manager
      </h1>

      <Tabs defaultValue="photos">
        <TabsList className="mb-6">
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>

        <TabsContent value="photos">
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50 mb-6">
            <h2 className="font-semibold text-foreground mb-4">Add New Photo</h2>
            <div className="flex gap-3">
              <Input
                placeholder="Enter photo URL"
                value={newPhotoUrl}
                onChange={(e) => setNewPhotoUrl(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleAddPhoto}>
                <Plus size={18} className="mr-2" />
                Add
              </Button>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
            <h2 className="font-semibold text-foreground mb-4">Gallery Photos</h2>
            {photos.length === 0 ? (
              <p className="text-muted-foreground">No custom photos added yet.</p>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {photos.map((url, index) => (
                  <div key={index} className="relative group rounded-lg overflow-hidden">
                    <img src={url} alt={`Gallery ${index + 1}`} className="w-full h-32 object-cover" />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => handleDeletePhoto(index)}
                    >
                      <Trash2 size={18} />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="videos">
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50 mb-6">
            <h2 className="font-semibold text-foreground mb-4">Add New Video</h2>
            <div className="flex gap-3">
              <Input
                placeholder="Enter YouTube embed URL"
                value={newVideoUrl}
                onChange={(e) => setNewVideoUrl(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleAddVideo}>
                <Plus size={18} className="mr-2" />
                Add
              </Button>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
            <h2 className="font-semibold text-foreground mb-4">Gallery Videos</h2>
            {videos.length === 0 ? (
              <p className="text-muted-foreground">No custom videos added yet.</p>
            ) : (
              <div className="grid sm:grid-cols-2 gap-4">
                {videos.map((url, index) => (
                  <div key={index} className="relative group">
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <iframe
                        src={url}
                        title={`Video ${index + 1}`}
                        className="w-full h-full"
                        allowFullScreen
                      />
                    </div>
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2"
                      onClick={() => handleDeleteVideo(index)}
                    >
                      <Trash2 size={18} />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

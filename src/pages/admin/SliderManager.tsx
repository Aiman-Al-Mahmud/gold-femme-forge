import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function SliderManager() {
  const [sliders, setSliders] = useState<string[]>([]);
  const [newUrl, setNewUrl] = useState("");

  const handleAdd = () => {
    if (!newUrl) {
      toast.error("Please enter an image URL");
      return;
    }
    setSliders([...sliders, newUrl]);
    setNewUrl("");
    toast.success("Slider image added");
  };

  const handleDelete = (index: number) => {
    const updated = sliders.filter((_, i) => i !== index);
    setSliders(updated);
    toast.success("Slider image removed");
  };

  return (
    <div>
      <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
        Slider Manager
      </h1>

      <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50 mb-6">
        <h2 className="font-semibold text-foreground mb-4">Add New Slider Image</h2>
        <div className="flex gap-3">
          <Input
            placeholder="Enter image URL or upload"
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleAdd}>
            <Plus size={18} className="mr-2" />
            Add
          </Button>
        </div>
        <p className="text-muted-foreground text-sm mt-2">
          Note: In production, this would support file uploads. Currently accepts image URLs.
        </p>
      </div>

      <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
        <h2 className="font-semibold text-foreground mb-4">Current Sliders</h2>
        {sliders.length === 0 ? (
          <p className="text-muted-foreground">No custom sliders added yet. Default sliders are being used.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sliders.map((url, index) => (
              <div key={index} className="relative group rounded-lg overflow-hidden">
                <img
                  src={url}
                  alt={`Slider ${index + 1}`}
                  className="w-full h-40 object-cover"
                />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => handleDelete(index)}
                >
                  <Trash2 size={18} />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

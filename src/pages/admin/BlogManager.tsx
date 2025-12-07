import { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
}

const initialBlogs: BlogPost[] = [
  {
    id: 1,
    title: "5 Benefits of Yoga for Women's Health",
    excerpt: "Discover how regular yoga practice can improve your physical and mental well-being.",
    content: "Full content here...",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    author: "Nusrat Jahan",
    date: "December 5, 2024",
    category: "Yoga",
  },
];

export default function BlogManager() {
  const [blogs, setBlogs] = useState<BlogPost[]>(initialBlogs);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    image: "",
    author: "",
    category: "",
  });

  const handleSubmit = () => {
    if (!formData.title || !formData.excerpt || !formData.content) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (editingBlog) {
      setBlogs(
        blogs.map((b) =>
          b.id === editingBlog.id
            ? { ...b, ...formData, date: b.date }
            : b
        )
      );
      toast.success("Blog post updated");
    } else {
      const newBlog: BlogPost = {
        id: Date.now(),
        ...formData,
        date: new Date().toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
      };
      setBlogs([newBlog, ...blogs]);
      toast.success("Blog post created");
    }

    setFormData({
      title: "",
      excerpt: "",
      content: "",
      image: "",
      author: "",
      category: "",
    });
    setEditingBlog(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (blog: BlogPost) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      excerpt: blog.excerpt,
      content: blog.content,
      image: blog.image,
      author: blog.author,
      category: blog.category,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setBlogs(blogs.filter((b) => b.id !== id));
    toast.success("Blog post deleted");
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
          Blog Manager
        </h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={() => {
                setEditingBlog(null);
                setFormData({
                  title: "",
                  excerpt: "",
                  content: "",
                  image: "",
                  author: "",
                  category: "",
                });
              }}
            >
              <Plus size={18} className="mr-2" />
              New Post
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingBlog ? "Edit Blog Post" : "Create New Blog Post"}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label>Title</Label>
                <Input
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="mt-1"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Author</Label>
                  <Input
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Category</Label>
                  <Input
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="mt-1"
                  />
                </div>
              </div>
              <div>
                <Label>Feature Image URL</Label>
                <Input
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="mt-1"
                />
              </div>
              <div>
                <Label>Excerpt</Label>
                <Textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  className="mt-1"
                  rows={2}
                />
              </div>
              <div>
                <Label>Content (HTML supported)</Label>
                <Textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="mt-1"
                  rows={8}
                />
              </div>
              <Button onClick={handleSubmit} className="w-full">
                {editingBlog ? "Update Post" : "Create Post"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-card rounded-xl shadow-sm border border-border/50 overflow-hidden">
        {blogs.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground">
            No blog posts yet.
          </div>
        ) : (
          <div className="divide-y divide-border">
            {blogs.map((blog) => (
              <div key={blog.id} className="p-4 flex items-center gap-4">
                {blog.image && (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-20 h-14 object-cover rounded-lg"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground truncate">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {blog.author} • {blog.date}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" onClick={() => handleEdit(blog)}>
                    <Edit size={18} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive"
                    onClick={() => handleDelete(blog.id)}
                  >
                    <Trash2 size={18} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

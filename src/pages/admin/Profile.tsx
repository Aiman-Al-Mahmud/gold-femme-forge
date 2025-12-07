import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function Profile() {
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem("adminEmail");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 500));

    if (currentPassword !== "wgyg1234") {
      toast.error("Current password is incorrect");
      setIsLoading(false);
      return;
    }

    // In production, this would update actual credentials
    localStorage.setItem("adminEmail", email);
    toast.success("Profile updated successfully!");
    setCurrentPassword("");
    setNewPassword("");
    setIsLoading(false);
  };

  return (
    <div>
      <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
        Profile Settings
      </h1>

      <div className="max-w-xl">
        <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
          <form onSubmit={handleUpdateProfile} className="space-y-5">
            <div>
              <Label htmlFor="email" className="text-foreground">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2"
                required
              />
            </div>

            <div>
              <Label htmlFor="currentPassword" className="text-foreground">
                Current Password
              </Label>
              <Input
                id="currentPassword"
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="mt-2"
                required
              />
            </div>

            <div>
              <Label htmlFor="newPassword" className="text-foreground">
                New Password (optional)
              </Label>
              <Input
                id="newPassword"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-2"
                placeholder="Leave blank to keep current password"
              />
            </div>

            <Button type="submit" variant="hero" disabled={isLoading}>
              {isLoading ? "Updating..." : "Update Profile"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

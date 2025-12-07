import { useEffect, useState } from "react";
import { Calendar, Mail, Users, FileText } from "lucide-react";

interface Stats {
  appointments: number;
  messages: number;
  blogs: number;
  galleries: number;
}

export default function Dashboard() {
  const [stats, setStats] = useState<Stats>({
    appointments: 0,
    messages: 0,
    blogs: 3,
    galleries: 6,
  });

  useEffect(() => {
    const appointments = JSON.parse(localStorage.getItem("appointments") || "[]");
    const messages = JSON.parse(localStorage.getItem("messages") || "[]");
    setStats((prev) => ({
      ...prev,
      appointments: appointments.length,
      messages: messages.length,
    }));
  }, []);

  const statCards = [
    { label: "Appointments", value: stats.appointments, icon: Calendar, color: "bg-primary" },
    { label: "Messages", value: stats.messages, icon: Mail, color: "bg-accent" },
    { label: "Blog Posts", value: stats.blogs, icon: FileText, color: "bg-secondary" },
    { label: "Gallery Items", value: stats.galleries, icon: Users, color: "bg-primary" },
  ];

  return (
    <div>
      <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
        Dashboard
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statCards.map((stat, index) => (
          <div
            key={index}
            className="bg-card rounded-xl p-6 shadow-sm border border-border/50"
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}
              >
                <stat.icon className="text-primary-foreground" size={24} />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
        <h2 className="font-display text-xl font-bold text-foreground mb-4">
          Welcome to the Admin Panel
        </h2>
        <p className="text-muted-foreground">
          Manage your gym's website content, appointments, and messages from this dashboard.
          Use the sidebar menu to navigate to different sections.
        </p>
      </div>
    </div>
  );
}

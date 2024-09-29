import { useState } from "react";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { ServiceSection } from "../dashboard/ServiceSection";
import { UserNav } from "../dashboard/UserNav";
import { ProgressSection } from "../dashboard/ProgressSection";
import { HeroSection } from "../dashboard/HeroSection";
import {
  BarChart3,
  Dumbbell,
  LineChart,
  ListMusic,
  Menu,
  Sandwich,
} from "lucide-react";

import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export function Dashboard() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-300">
      <Sidebar
        collapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />
      <main className="flex-1 overflow-y-auto ml-16 md:ml-64 transition-all duration-300">
        <div className="flex items-center justify-between p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          >
            <Menu className="text-gray-900 h-6 w-6" />
          </Button>
          <UserNav />
        </div>
        <ScrollArea className="h-[calc(100vh-64px)]">
          <div className="container mx-auto p-6 space-y-8">
            <HeroSection />
            <ProgressSection />
            <ServiceSection />
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}

//---------SIDEBAR--------//

function Sidebar({ collapsed, onToggle }) {
  const navItems = [
    { icon: BarChart3, label: "Dashboard", href: "/dashboard" },
    { icon: Dumbbell, label: "Workouts", href: "/workouts" },
    { icon: Sandwich, label: "Nutrition", href: "/nutrition" },
    { icon: LineChart, label: "Progress", href: "/progress" },
    { icon: ListMusic, label: "Media", href: "/media" },
  ];

  return (
    <div
      className={`bg-gray-900 border border-gray-700 rounded-3xl shadow-lg transition-all duration-300 p-7 absolute ${
        collapsed ? "w-15" : "w-60"
      }`}
      style={{
        left: "5px",
        top: "20px",
        margin: "10px",
        height: "700px",
      }}
    >
      <div className="flex items-center justify-center mb-6">
        {/* Logo Image */}
        <img
          src={logo}
          alt="FitGuys Web"
          className={`${
            collapsed ? "h-10 w-10" : "h-20 w-20" // Increased size
          } rounded-full transition-all duration-300`}
          style={{
            height: collapsed ? "50px" : "90px", // Adjusted for size increase
            width: collapsed ? "50px" : "90px", // Adjusted for size increase
          }}
        />
      </div>

      <nav className="space-y-10">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`flex items-center gap-3 py-2 px-4 transition-all duration-300 rounded-xl hover:bg-gray-700 active:bg-gray-600 ${
              collapsed ? "justify-center" : "space-x-3"
            }`}
          >
            <item.icon className="h-5 w-5 text-white" />
            {!collapsed && (
              <span className="text-white font-medium text-lg">
                {item.label}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
}
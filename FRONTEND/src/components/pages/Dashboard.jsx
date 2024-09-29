import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "../ui/sheet";
import {
  BarChart3,
  ChevronRight,
  Dumbbell,
  Heart,
  LineChart,
  ListMusic,
  Menu,
  Sandwich,
  User,
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

//---------USER-NAVIGATION--------//

function UserNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className=" flex items-center justify-around h-12 w-32 rounded-full bg-gray-800 hover:bg-gray-700 transition duration-200"
          style={{ border: "none" }}
        >
          <User className="h-5 w-5 text-white" />
          <span className="text-white text-base">Profile</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-gray-900 text-white p-0">
        {/* Added padding and removed the border */}
        <Card
          style={{ border: "none" }}
          className="bg-gray-800 rounded-2xl p-4 shadow-lg mx-4 my-4"
        >
          <CardHeader className="flex items-center justify-between"></CardHeader>
          <CardContent className="flex items-center space-x-4">
            <img
              src="https://avatars.githubusercontent.com/u/137706422?v=4" // User's image
              alt="User"
              className="h-16 w-16 rounded-full" // Removed border
            />
            <div className="space-y-1">
              <p className="text-2xl text-gray-50 font-medium">Gourav Kumar</p>
              <p className="text-sm text-gray-300">rajgourav11@example.com</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-gray-300 hover:bg-gray-400 transition duration-200 text-black text-base">
              Edit Profile
            </Button>
          </CardFooter>
        </Card>
      </SheetContent>
    </Sheet>
  );
}

//---------HERO-SECTION-------//

function HeroSection() {
  return (
    <div className="flex flex-col justify-center space-y-4 text-center bg-gray-900 p-[10vh] rounded-xl">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl xl:text-8xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          Welcome to FitGuys Web
        </h1>
        <p className=" max-w-[800px] text-xl font-light tracking-tighter sm:text-xl xl:text-2xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mx-auto">
          Track your workouts, manage your nutrition, and achieve your fitness
          goals with our comprehensive suite of tools and services.
        </p>
      </div>
    </div>
  );
}

//---------PROGRESS-SECTION-------//

function ProgressSection() {
  return (
    <div className="space-y-4 p-6 rounded-xl shadow-md bg-white">
      <h2 className="text-3xl font-semibold">Your Progress</h2>
      <div className="flex items-center space-x-4">
        <img
          src="https://avatars.githubusercontent.com/u/137706422?v=4"
          alt="User Avatar"
          width={80}
          height={80}
          className="rounded-full"
        />
        <div>
          <h2 className="font-semibold text-xl">Gaurav Kumar</h2>
          <p className="text-sm text-muted-foreground">
            Goal: Gain 10 lbs muscle in 3 months
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 bg-gray-">
        <div className="border border-gray-200 p-4 rounded">
          <p className="text-sm text-muted-foreground">Weight</p>
          <p className="font-semibold">180 lbs</p>
        </div>
        <div className="border border-gray-200 p-4 rounded">
          <p className="text-sm text-muted-foreground">Height</p>
          <p className="font-semibold">5'10"</p>
        </div>
        <div className="border border-gray-200 p-4 rounded">
          <p className="text-sm text-muted-foreground">BMI</p>
          <p className="font-semibold">25.8</p>
        </div>
        <div className="border border-gray-200 p-4 rounded">
          <p className="text-sm text-muted-foreground">Body Fat</p>
          <p className="font-semibold">18%</p>
        </div>
      </div>
      <div className="flex justify-center">
        <Button className="px-8 bg-gray-900 w-full text-gray-100">
          View Workout Logs
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

//---------SERVICE-SECTION------//

function ServiceSection() {
  const services = [
    {
      icon: Dumbbell,
      title: "Explore Workouts",
      description: "Find workouts based on body part",
      image: "https://i.pinimg.com/564x/83/0a/41/830a41d49ff6583ec4fc737d6c601e4c.jpg", // Placeholder image URL
      link: "/explore-workouts",
    },
    {
      icon: LineChart,
      title: "Create Your Workout",
      description: "Design your own custom workout plan",
      image: "create-workout.jpg",
      link: "/create-workout",
    },
    {
      icon: Sandwich,
      title: "Nutrition Plan",
      description: "Get personalized nutrition advice",
      image: "nutrition.jpg",
      link: "/nutrition-plan",
    },
    {
      icon: BarChart3,
      title: "Track Progress",
      description: "Monitor your fitness journey",
      image: "progress.jpg",
      link: "/track-progress",
    },
    {
      icon: ListMusic,
      title: "Fitness Media",
      description: "Discover health-related music and podcasts",
      image: "fitness-media.jpg",
      link: "/fitness-media",
    },
    {
      icon: Heart,
      title: "Health Insights",
      description: "Get personalized health recommendations",
      image: "health-insights.jpg",
      link: "/health-insights",
    },
  ];

  return (
    <div className="space-y-6 bg-white rounded-xl">
      <h2 className="text-2xl font-semibold text-center">Our Services</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-500 text-card-foreground rounded-lg shadow-sm overflow-hidden w-full max-w-sm"
          >
            <img
              src={service.image} // You can replace with actual image URLs
              alt={service.title}
              className="h-32 w-full object-cover"
            />
            <div className="p-4 flex items-center text-white">
              <service.icon className="h-6 w-6 mr-2 text-gray-50" />
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </div>
            <p className="p-4 text-white">{service.description}</p>
            <div className="p-4 flex justify-center">
              <Button asChild className="bg-black text-white">
                <a href={service.link} className="text-sm">
                  Learn More
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
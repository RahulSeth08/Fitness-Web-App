import React, { useState } from 'react'
import { LayoutDashboard, Calendar, BarChart2, Users, Settings, Bell, ChevronLeft, ChevronRight, Menu, User, LogOut, Dumbbell, Heart, Apple, Coffee } from 'lucide-react'
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Progress } from "../ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { cn } from "../../lib/utils"
import { useAuth } from "../auth/AuthContext";

const navItems = [
  { icon: LayoutDashboard, name: 'Dashboard', href: '#' },
  { icon: Dumbbell, name: 'Workout Plans', href: '#' },
  { icon: BarChart2, name: 'Progress', href: '#' },
  { icon: Users, name: 'Community', href: '#' },
  { icon: Settings, name: 'Settings', href: '#' },
]

const progressItems = [
  { title: 'Daily Steps', current: 8500, goal: 10000, unit: 'steps' },
  { title: "Today's Workout", current: 3, goal: 7, unit: 'days' },
  { title: 'Weight ', current: 100, goal: 85, unit: 'kg' },
  { title: 'Workout Duration', current: 45, goal: 60, unit: 'min' },
]

const services = [
  { icon: Dumbbell, title: 'Explore Workout', description: 'Find workouts based on body part' },
  { icon: Heart, title: 'Yoga ', description: 'Find inner peace and improve flexibility' },
  { icon: Apple, title: 'Nutrition', description: 'Customized meal plans for your fitness goals' },
  { icon: Coffee, title: 'Health Insights', description: 'Get personalized health recommendations' },
]
// const { logout } = useAuth();
// const handleLogout = () => {
//   logout(); // Call the logout function
//   navigate("/auth/signin"); // Redirect to the sign-in page after logout
// };

export function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const {userData} = useAuth();

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen transition-all duration-300 ease-in-out",
          sidebarOpen ? "w-64" : "w-16"
        )}
      >
        <div className="h-full bg-gray-800 flex flex-col">
          <div className="flex items-center justify-between h-16 px-4">
            {sidebarOpen && <span className="text-2xl font-semibold text-white hover:text-lavender cursor-pointer">FitGuysWeb</span>}
            <Button
              variant="ghost"
              size={sidebarOpen ? "icon" : "lg"}
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={cn(
                "flex items-center justify-center",
                sidebarOpen ? "p-2" : "p-3"
              )}
            >
              {sidebarOpen ? (
                <ChevronLeft className="h-5 w-5 text-white" />
              ) : (
                <ChevronRight className="h-6 w-6 text-white" />
              )}
            </Button>
          </div>
          <nav className="flex-1 overflow-y-auto">
            <ul className="p-4 space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-3 px-3 py-2 rounded-lg text-purple-200",
                      "hover:text-lavender transition-colors duration-300 cursor-pointer"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {sidebarOpen && <span>{item.name}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className={cn(
        "flex-1 flex flex-col overflow-hidden",
        sidebarOpen ? "ml-64" : "ml-16"
      )}>
        {/* Header */}
        <header className="flex justify-between items-center p-4 bg-gray-800 shadow">
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5 text-white" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none text-black">name </p>
                    <p className="text-xs leading-none text-gray-700">email</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span className="text-black">Edit Profile</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span className="text-black">Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900">
          <div className="container mx-auto px-4 py-8">
            {/* New Welcome Section */}
            <div className="flex flex-col justify-center space-y-4 text-center bg-gray-900 p-[10vh] rounded-xl mb-8">
              <div className="space-y-2">
                <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl xl:text-8xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                  Welcome to FitGuys Web
                </h1>
                <p className="max-w-[800px] text-xl font-light tracking-tighter sm:text-xl xl:text-2xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mx-auto">
                  Track your workouts, manage your nutrition, and achieve your fitness
                  goals with our comprehensive suite of tools and services.
                </p>
              </div>
            </div>

            {/* Progress Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Your Progress</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {progressItems.map((item, index) => (
                  <Card key={index} className="bg-gray-800">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-white">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-2 text-white">
                        {item.current} <span className="text-sm font-normal text-gray-400">/ {item.goal} {item.unit}</span>
                      </div>
                      <Progress value={(item.current / item.goal) * 100} className="h-2 bg-[#7866dd]" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Services Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {services.map((service, index) => (
                  <Card key={index} className="bg-gray-800">
                    <CardHeader>
                      <service.icon className="h-8 w-8 mb-2 text-purple-400" />
                      <CardTitle className="text-white">{service.title}</CardTitle>
                      <CardDescription className="text-gray-400">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-[#7866dd] transition-colors duration-300 cursor-pointer text-white">Learn More</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

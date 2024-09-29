import dashboard2 from "../../assets/dashboard2.jpg";
import dashboard3 from "../../assets/dashboard3.jpg";
import dashboard4 from "../../assets/dashboard4.jpg";
import dashboard5 from "../../assets/dashboard5.jpg";
import dashboard6 from "../../assets/dashboard6.avif";

import { Button } from "../ui/button";
import {
    BarChart3,
    Dumbbell,
    Heart,
    LineChart,
    ListMusic,
    Sandwich,
} from "lucide-react";

export function ServiceSection() {
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
            image: dashboard2,
            link: "/create-workout",
        },
        {
            icon: Sandwich,
            title: "Nutrition Plan",
            description: "Get personalized nutrition advice",
            image: dashboard3,
            link: "/nutrition-plan",
        },
        {
            icon: BarChart3,
            title: "Track Progress",
            description: "Monitor your fitness journey",
            image: dashboard4,
            link: "/track-progress",
        },
        {
            icon: ListMusic,
            title: "Fitness Media",
            description: "Discover health-related music and podcasts",
            image: dashboard5,
            link: "/fitness-media",
        },
        {
            icon: Heart,
            title: "Health Insights",
            description: "Get personalized health recommendations",
            image: dashboard6,
            link: "/health-insights",
        },
    ];

    return (
        <div className="space-y-6 bg-white rounded-xl p-7">
            <h2 className="text-2xl font-semibold text-center">Our Services</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center px-4">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 text-card-foreground rounded-lg shadow-sm overflow-hidden w-full max-w-sm flex flex-col"
                    >
                        <div className="relative h-0 pb-60"> {/* Image occupies 60% of the card */}
                            <img
                                src={service.image} 
                                alt={service.title}
                                className="absolute top-0 left-0 h-full w-full object-cover"
                            />
                        </div>
                        <div className="flex-grow p-4 text-white flex flex-col justify-between">
                            <div className="flex items-center">
                                <service.icon className="h-6 w-6 mr-2 text-gray-50" />
                                <h3 className="text-lg font-semibold">{service.title}</h3>
                            </div>
                            <p className="py-4">{service.description}</p>
                        </div>
                        <div className="p-4 bg-gray-800 flex justify-center mt-auto"> {/* Button always at the bottom */}
                            <Button asChild className="bg-gray-300 text-black w-full">
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

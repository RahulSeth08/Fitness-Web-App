import { useState } from 'react';
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ChevronDown, ChevronUp, Users, Trophy, Dumbbell, Heart } from 'lucide-react';

const teamMembers = [
  { name: "Gourav Kumar", role: "Co-Founder", image: "/placeholder.svg?height=200&width=200" },
  { name: "Darshan CH", role: "Co-Founder", image: "/placeholder.svg?height=200&width=200" },
  { name: "Rahul Seth", role: "Co-Founder", image: "/placeholder.svg?height=200&width=200" },
  { name: "Madhav Sharma", role: "Co-Founder", image: "/placeholder.svg?height=200&width=200" },
];

const timeline = [
  { year: 2024, event: "FitGuysWeb founded" },
  { year: 2024, event: "Opened first physical location" },
  { year: 2024, event: "Launched online training platform" },
  { year: 2024, event: "Expanded to 10 locations nationwide" },
  { year: 2024, event: "Introduced AI-powered fitness tracking" },
];

export function About() {
  const [showFullMission, setShowFullMission] = useState(false);

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-16 text-center">About <span className="text-orange-500">FitGuysWeb</span></h1>
        
        {/* Mission Statement */}
        <div className="mb-20">
          <h2 className="text-4xl font-semibold mb-8 text-center">Our Mission</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl mb-4 leading-relaxed">
              At FitGuys, we're on a mission to empower individuals to transform their lives through fitness, nutrition, and holistic well-being. We believe that everyone deserves to feel strong, confident, and healthy.
            </p>
            {!showFullMission && (
              <Button onClick={() => setShowFullMission(true)} variant="link" className="text-orange-500 hover:text-orange-400">
                Read More <ChevronDown className="ml-2" />
              </Button>
            )}
            {showFullMission && (
              <>
                <p className="text-xl mb-4 leading-relaxed">
                  Our approach combines cutting-edge fitness science with personalized coaching to create sustainable lifestyle changes. We're not just about short-term results; we're committed to helping you build lasting habits that will serve you for a lifetime.
                </p>
                <p className="text-xl mb-4 leading-relaxed">
                  Whether you're a beginner taking your first steps towards a healthier life or an athlete looking to push your limits, FitGuys is here to support, guide, and inspire you every step of the way.
                </p>
                <Button onClick={() => setShowFullMission(false)} variant="link" className="text-orange-500 hover:text-orange-400">
                  Show Less <ChevronUp className="ml-2" />
                </Button>
              </>
            )}
          </div>
        </div>
        
        {/* Team Members */}
        <div className="mb-20">
          <h2 className="text-4xl font-semibold mb-12 text-center">Meet Our <span className="text-orange-500">Expert Team</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-gray-800 hover:bg-gray-700 transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-orange-500" />
                  <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
                  <p className="text-white">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Company Stats */}
        <div className="mb-20">
          <h2 className="text-4xl font-semibold mb-12 text-center">Our <span className="text-orange-500">Impact</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[ 
              { icon: Users, label: "Clients Served", value: "50,000+" },
              { icon: Trophy, label: "Awards Won", value: "25" },
              { icon: Dumbbell, label: "Workout Plans", value: "1,000+" },
              { icon: Heart, label: "Lives Changed", value: "Countless" },
            ].map((stat, index) => (
              <Card key={index} className="bg-gray-800 hover:bg-gray-700 transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                  <h3 className="text-3xl font-bold mb-2 text-white">{stat.value}</h3>
                  <p className="text-white">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Timeline */}
        <div>
          <h2 className="text-4xl font-semibold mb-12 text-center">Our <span className="text-orange-500">Journey</span></h2>
          <Tabs defaultValue="2022" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              {timeline.map((item) => (
                <TabsTrigger key={item.year} value={item.year.toString()} className="text-black data-[state=active]:bg-orange-500">
                  {item.year}
                </TabsTrigger>
              ))}
            </TabsList>
            {timeline.map((item) => (
              <TabsContent key={item.year} value={item.year.toString()} className="mt-4">
                <Card className="bg-gray-800">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-orange-500">{item.year}</h3>
                    <p className="text-xl text-white">{item.event}</p>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        {/* Call to Action */}
        {/* <div className="mt-20 text-center">
          <h2 className="text-4xl font-semibold mb-8">Ready to <span className="text-orange-500">Transform</span> Your Life?</h2>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            Start Your Journey
          </Button>
        </div> */}
      </div>
    </section>
  );
}

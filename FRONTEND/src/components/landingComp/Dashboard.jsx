import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
// import {UserCircle, BarChart2, Yoga, Utensils, PlusCircle } from "lucide-react";

export function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 p-4">
        <div className="flex items-center mb-6">
          {/* <DumbellIcon className="h-8 w-8 text-blue-500 mr-2" /> */}
          <h1 className="text-2xl font-bold">FitGuys Web</h1>
        </div>
        <nav>
          <Button variant="ghost" className="w-full justify-start mb-2">
            {/* <BarChart2 className="mr-2 h-4 w-4" /> Workouts */}
          </Button>
          <Button variant="ghost" className="w-full justify-start mb-2">
            {/* <PlusCircle className="mr-2 h-4 w-4" /> Custom Workout */}
          </Button>
          <Button variant="ghost" className="w-full justify-start mb-2">
            {/* <Utensils className="mr-2 h-4 w-4" /> Nutrition */}
          </Button>
          <Button variant="ghost" className="w-full justify-start mb-2">
            {/* <Yoga className="mr-2 h-4 w-4" /> Yoga */}
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Dashboard</h2>
          <div className="flex items-center">
            <span className="mr-2">Hello, Gourav</span>
            {/* <UserCircle className="h-10 w-10" /> */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Custom Workout Section */}
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Custom Workout</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="create">
                <TabsList className="mb-4">
                  <TabsTrigger value="create">Create</TabsTrigger>
                  <TabsTrigger value="saved">Saved</TabsTrigger>
                </TabsList>
                <TabsContent value="create">
                  <div className="grid grid-cols-2 gap-4">
                    <Button>Bro Split</Button>
                    <Button>Push Pull</Button>
                    <Button>Chest</Button>
                    <Button>Back</Button>
                    <Button variant="outline">More Options</Button>
                  </div>
                </TabsContent>
                <TabsContent value="saved">
                  <p>Your saved workouts will appear here.</p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Progress Tracking */}
          <Card>
            <CardHeader>
              <CardTitle>Progress Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Track your progress</li>
                <li>Your workouts</li>
                <li>Update your workout</li>
                <li>Your workout log</li>
              </ul>
            </CardContent>
          </Card>

          {/* Create Workout Section */}
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Create Your Workout</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input placeholder="Exercise Name" />
                <Input placeholder="Sets" type="number" />
                <Input placeholder="Reps" type="number" />
                <Input placeholder="Weight" type="number" />
                <Input placeholder="Rest Time" />
                <Button className="md:col-start-3">Add Exercise</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

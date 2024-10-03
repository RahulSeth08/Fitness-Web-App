import { Button } from "../ui/button";
import {
  ChevronRight,
} from "lucide-react";
import { useAuth } from "../auth/AuthContext";

export function ProgressSection() {
  const {userData} = useAuth();
    return (
      <div className="space-y-4 p-7 rounded-xl shadow-md bg-white">
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
            <h2 className="font-semibold text-xl">{userData.fullName}</h2>
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
            <p className="text-sm text-muted-foreground">Workout Hour</p>
            <p className="font-semibold">0</p>
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
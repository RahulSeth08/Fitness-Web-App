import { Button } from "../ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import {
  User,
} from "lucide-react";


export function UserNav() {
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
            <CardFooter className="flex flex-col gap-3">
              <Button className="w-full bg-gray-300 hover:bg-gray-400 transition duration-200 text-black text-base">
                Edit Profile
              </Button>
              <Button className="w-full bg-gray-300 hover:bg-gray-400 transition duration-200 text-black text-base">
                LogOut
              </Button>
            </CardFooter>
          </Card>
        </SheetContent>
      </Sheet>
    );
  }
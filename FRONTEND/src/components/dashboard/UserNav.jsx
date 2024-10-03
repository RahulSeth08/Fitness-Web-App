import { Button } from "../ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { User } from "lucide-react";
import { useAuth } from "../auth/AuthContext"; // Import the useAuth hook
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection


export function UserNav() {
  const { logout } = useAuth(); // Get the logout function from context
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    logout(); // Call the logout function
    navigate("/auth/signin"); // Redirect to the sign-in page after logout
  };
  const editprofile = () => {
    navigate("/dashboard/editprofile"); // Redirect to the sign-in page after logout
  };
  const { userData } = useAuth();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center justify-around h-12 w-32 rounded-full bg-gray-800 hover:bg-gray-700 transition duration-200"
          style={{ border: "none" }}
        >
          <User className="h-5 w-5 text-white" />
          <span className="text-white text-base">Profile</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-gray-900 text-white p-0">
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
              <p className="text-2xl text-gray-50 font-medium">{userData.username}</p>
              <p className="text-sm text-gray-300">{userData.email}</p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-3">
            <Button className="w-full bg-gray-300 hover:bg-gray-400 transition duration-200 text-black text-base">
              Edit Profile
            </Button>

            <Button
              className="w-full bg-gray-300 hover:bg-gray-400 transition duration-200 text-black text-base"
              onClick={handleLogout} // Add the onClick handler for logout
            >
              LogOut
            </Button>
          </CardFooter>
        </Card>
      </SheetContent>
    </Sheet>
  );
}

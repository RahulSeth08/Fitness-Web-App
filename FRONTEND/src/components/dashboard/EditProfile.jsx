import { useState } from 'react';
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useAuth } from '../auth/AuthContext';

export function EditProfile() {
  const { userData, authToken } = useAuth(); // Get user data and authToken from context
  const currentName = userData.fullName; 
  const currentEmail = userData.email; 
  const currentUsername = userData.username;
  const backend_url = import.meta.env.VITE_API_URL; 

  const [username, setUsername] = useState(currentUsername);
  const [email, setEmail] = useState(currentEmail);
  const [fullName, setFullName] = useState(currentName);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare the payload for the API
    const payload = {
      username,
      email,
      fullName,// Include password if you want to allow users to change it
    };

    try {
      const response = await fetch(`${backend_url}/user/${userData.id}`, { // Assuming userData contains an 'id' field
        method: 'PUT', // Use PUT method to update
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}` // Include token in headers
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const updatedUserData = await response.json();
      console.log('Profile updated:', updatedUserData);
      // You might want to update the context or state with the new data here
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4">
      <div className="max-w-md mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Edit Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-700 border-gray-600 text-gray-100"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-700 border-gray-600 text-gray-100"
            />
          </div>
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="bg-gray-700 border-gray-600 text-gray-100"
            />
          </div>
          {/* <div>
            <Label htmlFor="password">New Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-700 border-gray-600 text-gray-100"
            />
          </div> */}
          <Button onClick = {handleSubmit} type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Save Changes
          </Button>
        </form>
      </div>
    </div>
  );
}

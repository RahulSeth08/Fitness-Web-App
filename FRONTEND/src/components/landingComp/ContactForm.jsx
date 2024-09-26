import { useState } from "react";
import { Button } from "../ui/button"; // Adjust the path as needed
import { Input } from "../ui/input"; // Adjust the path as needed
import { Textarea } from "../ui/textarea"; // Adjust the path as needed
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card"; // Adjust the path as needed

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:darshanchoudhary1511@gmail.com?subject=Contact from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AMessage: ${formData.message}`;
    
    // Open the default email client
    window.location.href = mailtoLink;

    // Clear the form after submission
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="my-12">
      <Card className="w-full max-w-6xl mx-auto bg-white shadow-lg border border-gray-200 rounded-lg">
        <CardHeader className="bg-[#FF8C00] text-white rounded-t-lg">
          <CardTitle className="text-4xl font-bold text-center">Contact Us</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-[#f9f9f9] border border-gray-300 focus:border-[#228B22] focus:ring focus:ring-[#87CEEB]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-[#f9f9f9] border border-gray-300 focus:border-[#228B22] focus:ring focus:ring-[#87CEEB]"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  className="w-full bg-[#f9f9f9] border border-gray-300 focus:border-[#228B22] focus:ring focus:ring-[#87CEEB]"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  className="w-full h-32 bg-[#f9f9f9] border border-gray-300 focus:border-[#228B22] focus:ring focus:ring-[#87CEEB] resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white font-bold py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                Send Message
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};




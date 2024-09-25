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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form after submission
    } else {
      alert("Error sending message.");
    }
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


// import { Button } from "../ui/button"; // Update this path based on your file structure
// import { Input } from "../ui/input";
// import { Textarea } from "../ui/textarea";
// import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

// export const ContactForm = () => {
//   return (
//     <Card className="w-full max-w-6xl mx-auto bg-gray-100 shadow-xl">
//       <CardHeader className="bg-gray-800 text-white">
//         <CardTitle className="text-3xl font-bold">Contact Us</CardTitle>
//       </CardHeader>
//       <CardContent className="p-6">
//         <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="space-y-4">
//             <div>
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Name
//               </label>
//               <Input
//                 id="name"
//                 placeholder="Your Name"
//                 className="w-full bg-white border-gray-300 focus:border-purple-500 focus:ring-purple-500"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Email
//               </label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="your@email.com"
//                 className="w-full bg-white border-gray-300 focus:border-purple-500 focus:ring-purple-500"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="phone"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Phone
//               </label>
//               <Input
//                 id="phone"
//                 type="tel"
//                 placeholder="Your Phone Number"
//                 className="w-full bg-white border-gray-300 focus:border-purple-500 focus:ring-purple-500"
//               />
//             </div>
//           </div>
//           <div className="space-y-4">
//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Message
//               </label>
//               <Textarea
//                 id="message"
//                 placeholder="Your message here..."
//                 className="w-full h-32 bg-white border-gray-300 focus:border-purple-500 focus:ring-purple-500 resize-none"
//               />
//             </div>
//             <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded transition duration-300 cursor-pointer">
//               Send Message
//             </Button>
//           </div>
//         </form>
//       </CardContent>
//     </Card>
//   );
// };

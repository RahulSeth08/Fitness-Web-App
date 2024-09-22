import { Hero } from "./landingComp/Hero";
import { Services } from "./landingComp/Services";
import { Navbar } from "./landingComp/Navbar";
import { Footer } from "./landingComp/Footer";
import { Bmi } from "./landingComp/Bmi";

export function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Bmi />
        <Footer />
      </main>
    </div>
  );
}

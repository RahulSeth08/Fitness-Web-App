import { Navbar } from "./landingComp/Navbar";
import { Hero } from "./landingComp/Hero";
import { Bmi } from "./landingComp/Bmi";
import { Services } from "./landingComp/Services";
// import { Nutrition } from "./landingComp/Nutrition";
// import { About } from "./landingComp/About";
import { Footer } from "./landingComp/Footer";

export function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Bmi />
        {/* <About/> */}
        {/* <Nutrition/> */}
        <Footer />
      </main>
    </div>
  );
}

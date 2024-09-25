import { Hero } from "./landingComp/Hero";
import { Bmi } from "./landingComp/Bmi";
import { Services } from "./landingComp/Services";
import { Nutrition } from "./landingComp/Nutrition";
// import { About } from "./landingComp/About";
import { Footer } from "./landingComp/Footer";
import { Register } from "./landingComp/Register";

export function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
      {/* <Navbar /> */}
      <main>
        {/* <section id="register">
          <Register /> */}
        {/* </section> */}
        <section id="hero">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="bmi">
          <Bmi />
        </section>
        {/* <section id="about">
          <About/>
        </section> */}
        <section id="nutrition">
          <Nutrition />
        </section>
        <Footer />
      </main>
    </div>
  );
}

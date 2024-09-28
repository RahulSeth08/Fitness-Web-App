import { Hero } from "./landingComp/Hero";
// import { About } from "./landingComp/About";
import { Bmi } from "./landingComp/Bmi";
import { Services } from "./landingComp/Services";
import { Nutrition } from "./landingComp/Nutrition";
import { ContactForm } from "./landingComp/ContactForm";
import { Footer } from "./landingComp/Footer";
export function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
      {/* <Navbar /> */}
      <main>
        <section id="hero">
          <Hero />
        </section>
        {/* <section id="about">
          <About />
        </section> */}
        <section id="services">
          <Services />
        </section>
        <section id="bmi">
          <Bmi />
        </section>
        <section id="nutrition">
          <Nutrition />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
        <Footer />
      </main>
    </div>
  );
}

import { Hero } from "./Hero"
import { Navbar } from "./Navbar"
import { Services } from "./Services"
import { Bmi } from "./Bmi"
import { Footer } from "./Footer"

export function Landing (){
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <Bmi/>
      <Footer/>
    </div>
  )
}
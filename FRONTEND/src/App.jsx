import { Landing } from "./components/Landing";
import { Navbar } from "./components/landingComp/Navbar";
import { Register } from "./components/landingComp/Register";

export default function App() {
  return (
    <>
      <Register/>
      <Navbar/>
      <Landing />
    </>
  );
}

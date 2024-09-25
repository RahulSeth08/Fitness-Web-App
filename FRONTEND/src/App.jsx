import { Landing } from "./components/Landing";
import { Navbar } from "./components/landingComp/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignIn } from "./components/auth/SignIn";
import { SignUp } from "./components/auth/SignUp";
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/auth/signup" element={<SignUp />}></Route>
        <Route path="/auth/signin" element={<SignIn />}></Route>
      </Routes>
    </Router>
  );
}

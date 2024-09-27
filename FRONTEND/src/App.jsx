import { Landing } from "./components/Landing";
import { Navbar } from "./components/landingComp/Navbar";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { SignIn } from "./components/auth/SignIn";
import { SignUp } from "./components/auth/SignUp";
import {Blog} from "./components/pages/Blog";
import {Podcasts} from "./components/pages/Podcasts";


function AppContent() {
  // Get the current location
  const location = useLocation();
  


  // Check if the current path is signup or signin
  const isAuthRoute = location.pathname === "/auth/signup" || location.pathname === "/auth/signin" || location.pathname === "/blog";
 

  return (
    <>
      {/* Render Navbar only if not on auth routes */}
      {!isAuthRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/podcasts" element={<Podcasts />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

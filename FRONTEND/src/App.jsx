import { Landing } from "./components/Landing";
import { Navbar } from "./components/landingComp/Navbar";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { SignIn } from "./components/auth/SignIn";
import { SignUp } from "./components/auth/SignUp";
import { Blog } from "./components/pages/Blog";
import { Podcasts } from "./components/pages/Podcasts";
import { Dashboard } from "./components/pages/Dashboard";

function AppContent() {
  // Get the current location
  const location = useLocation();
  // Check if the current path is signup, signin, or blog
  const isAuthRoute = location.pathname === "/auth/signup" || location.pathname === "/dashboard" || location.pathname === "/auth/signin" || location.pathname === "/blog" || location.pathname === "/podcasts";

  // Check if the user is logged in (token exists in localStorage)
  const isLoggedIn = localStorage.getItem('authToken') !== null;


  return (
    <>
      {/* Render Navbar only if not on auth routes */}
      {!isAuthRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/blog" element={<Blog />} />
        {/* Redirect to /auth/signin if user is not logged in */}
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/auth/signin" replace />} />
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

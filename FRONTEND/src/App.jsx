// App.jsx
import { Landing } from "./components/Landing";
import { Navbar } from "./components/landingComp/Navbar";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { SignIn } from "./components/auth/SignIn";
import { SignUp } from "./components/auth/SignUp";
import { Blog } from "./components/pages/Blog";
import { Podcasts } from "./components/pages/Podcasts";
import { Dashboard } from "./components/pages/Dashboard";
import { AuthProvider, useAuth } from './components/auth/AuthContext'; // Import the AuthProvider
import { EditProfile } from "./components/dashboard/EditProfile";

function AppContent() {
  // Get the current location
  const location = useLocation();
  const { authToken } = useAuth();
  const isAuthRoute = location.pathname === "/auth/signup"|| location.pathname === "/dashboard/editprofile"|| location.pathname === "/dashboard" || location.pathname === "/auth/signin" || location.pathname === "/blog" || location.pathname === "/podcasts";
  const isLoggedIn = authToken!= null;
  return (
    <>
      {!isAuthRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/auth/signin" replace />} />
        <Route path="/dashboard/editprofile" element={isLoggedIn ? <EditProfile /> : <Navigate to="/auth/signin" replace />} />
        <Route path="/podcasts" element={<Podcasts />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <AuthProvider> {/* Wrap AppContent with AuthProvider */}
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

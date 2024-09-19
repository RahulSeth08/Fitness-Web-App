import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust this path as necessary

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Your route definitions */}
        <Route
          path="/"
          //  element={<Home />}
        />
        <Route
          path="/about"
          //  element={<About />}
        />
        <Route
          path="/services"
          //  element={<Pricing />}
        />
        <Route
          path="/bmiCalculator"
          //  element={<Schedule />}
        />
        <Route
          path="/contact"
          // element={<Contact />}
        />
      </Routes>
    </Router>
  );
}

export default App;

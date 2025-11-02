import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Tutoring from "./pages/Tutoring";
import About from "./pages/About";


function App() {
  return (

    <Router>

      <div className="flex flex-col min-h-screen bg-background text-foreground">

 <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tutoring" element={<Tutoring />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;

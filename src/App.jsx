import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";


function App() {
  return (

    <Router>

      <div className="flex flex-col min-h-screen bg-background text-foreground">

 <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;

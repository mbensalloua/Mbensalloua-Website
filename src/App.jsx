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
import './styles/globals.css'




function App() {
  return (
    <div className="min-h-screen bg-tunisian-white text-gray-900">
      <h1 className="text-3xl font-bold text-tunisian-red p-6">
        Client Portfolio
      </h1>
      <p className="p-6">Welcome — Data Scientist & Math Tutor</p>
    </div>
  );
}

export default App;

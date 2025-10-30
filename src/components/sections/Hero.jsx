// src/components/sections/Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section className="w-full bg-gray-50 ">
      {/* Hero Banner (centered, not full width) */}
      <div className="relative mx-auto w-full max-w-5xl h-[400px] rounded-md overflow-hidden shadow-md">
        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=crop&h=400&w=1000"
          alt="University Campus"
          className="w-full h-full object-cover"
        />
        {/* Headline Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-6 leading-tight">
            Meriem Bensalloua M.S. in Mathematics
            <br />
            Educator * Mentor * DataScientist
          </h1>
        </div>
      </div>

      {/* Bio Section with Icon */}
      <div className="max-w-5xl mx-auto mt-10 px-6 flex flex-col md:flex-row items-start gap-6">
        {/* Avatar Icon */}
        <img
          src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?crop=entropy&cs=tinysrgb&fit=crop&h=150&w=150"
          alt="Meriem Bensalloua"
          className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-md flex-shrink-0"
        />

        {/* Bio Text */}
        <div className="space-y-4 text-gray-700">
          <p>
            • Meriem Bensalloua is an educator, mentor, and data scientist who wants to make education and data science accessible to everyone. Driven by her enthusiasm and dream, she moved to the United States to continue her academic and professional journey. She arrived just as the COVID-19 crisis had reshaped the world. Despite the challenges, Meriem adapted quickly, leveraging online platforms to create meaningful remote learning experiences and mentorship opportunities for students and professionals alike. Her resilience and dedication have made her a beacon of innovation in education and data science.
          </p>
          <p>
            • Meriem believes that data science is an elegant art that transforms messy, complex information into meaningful insights capable of telling powerful human stories. Her research explores how data can illuminate issues of equity and inclusion, including projects focused on COVID-19 and racial disparities in California’s four-year colleges.
          </p>
          <p>
            • As a mentor and educator, she helps learners build confidence in mathematics, programming, and analytical thinking. Through her work, Meriem continues to inspire others to see data as more than just numbers—as stories that reveal both the beauty and complexity of the human experience.
          </p>
        </div>
      </div>
    </section>
  );
}

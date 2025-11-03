"use client";

import React from "react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
} from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import meriem from "@/assets/meriem.png"; // Profile picture

export default function About() {
  // === STEP 1: Reliable PDF download handler ===
  const handleResumeDownload = () => {
    const fileUrl = "/resume.pdf"; // public/resume.pdf is served from root
    const fileName = "Resume_Meriem.pdf";

    fetch(fileUrl)
      .then((res) => res.blob()) // convert response to blob
      .then((blob) => {
        const url = window.URL.createObjectURL(blob); // create temp URL
        const a = document.createElement("a"); // create <a> element
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click(); // trigger download
        a.remove();
        window.URL.revokeObjectURL(url); // cleanup
      })
      .catch((err) => console.error("Download failed:", err));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* === Navbar === */}
      <Menubar className="bg-gray-200 text-black p-2 rounded">
        <MenubarMenu>
          <Link to="/">
            <MenubarTrigger>Home</MenubarTrigger>
          </Link>
          <MenubarContent>
            <MenubarItem>Dashboard</MenubarItem>
            <MenubarItem>Settings</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Portfolio</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Web Apps</MenubarItem>
            <MenubarItem>Designs</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <Link to = "/services">
          <MenubarTrigger>Services</MenubarTrigger>
          </Link>
          <MenubarContent>
            <MenubarItem>Consulting</MenubarItem>
            <MenubarItem>Development</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>About</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Bio</MenubarItem>
            <MenubarItem>Contact</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Print <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      {/* === Main Content === */}


      <div className="max-w-6xl mx-auto py-12 px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Text Column */}
        <div className="md:col-span-2 flex flex-col gap-6 text-left">
          <h1 className="text-4xl font-extrabold tracking-tight">About Me</h1>
          <p className="text-gray-700 leading-7">
            I love traveling and discovering the beauty of the universe — it’s the same feeling I get when exploring data science. Every journey, whether across the world or through data, reveals new patterns, stories, and connections waiting to be understood.
          </p>

          <h2 className="text-2xl font-bold mt-6"> Education</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>M.S. in Discrete Mathematics and Optimization – USTHB, Algeria</li>
            <li>B.S. in Statistics – USTHB, Algeria</li>
            <li>Data Wrangling and Visualization Certificate – Cal Poly Pomona, Spring 2022</li>
            <li>Teaching Assistant Program Certificate – Cerritos College, Fall 2021</li>
            <li>Mentor Training Certificate – Cerritos College, Spring 2021</li>
            <li>Data Science Certificate (in progress) – El Camino College, California</li>
          </ul>

          <h2 className="text-2xl font-bold mt-6">Teaching & Mentoring</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Classroom management, lesson planning, curriculum design, and student evaluation</li>
            <li>Experience supporting diverse learners and fostering inclusive environments</li>
            <li>Peer tutoring, academic mentoring, and student success programs</li>
          </ul>

          <h2 className="text-2xl font-bold mt-6">Data Science & Research</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Python, R, and Excel</li>
            <li>Data wrangling, visualization, and statistical modeling</li>
            <li>Machine learning basics (classification, regression, clustering)</li>
            <li>Data storytelling and analytical problem solving</li>
          </ul>

          <h2 className="text-2xl font-bold mt-6">Professional Tools & Platforms</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Online teaching tools: Zoom, Google Workspace</li>
            <li>Texera Platform</li>
          </ul>

          <h2 className="text-2xl font-bold mt-6"> Certifications & Training</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Stanford University – Fundamentals of Data Science in Precision Medicine & Cloud Computing</li>
            <li>Cal Poly Pomona – Data Wrangling & Visualization Certificate</li>
            <li>Cerritos College – Teaching Assistant & Mentorship Certificates</li>
            <li>El Camino College – Data Science Certificate (in progress)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-6">Courses Taught</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Pre-Algebra, Algebra, and Calculus I – Strengthening students’ foundations</li>
            <li>Statistics and Probability for Data Science – Using Python for data inference</li>
            <li>Fundamentals of Data Science using Texera – Teaching Assistant (2025)</li>
            <li>Data Visualization and Communication – Transforming data into clear visuals</li>
          </ul>

          <h2 className="text-2xl font-bold mt-6">Workshops & Professional Development</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Texera “Data Science for All” Workshop – University of California, Irvine (Summer 2025)</li>
            <li>WiDS (Women in Data Science) Stanford Conference – Stanford University (2025)</li>
          </ul>
        </div>



        {/* Profile Picture + Download Button */}
        <div className="flex flex-col justify-between items-center md:items-end">
          <img
            src={meriem}
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover mb-6"
          />
          {/* === STEP 2: Use onClick handler for reliable download === */}
          <Button onClick={handleResumeDownload} className="mt-auto">
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
}


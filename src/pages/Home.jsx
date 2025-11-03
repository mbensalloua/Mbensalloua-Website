import {Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator, MenubarShortcut,} from "@/components/ui/menubar";
import Hero from "../components/sections/Hero";
import Portfolio from "../components/sections/Portfolio";
import Services from "../components/sections/Services";
import Contact from "../components/sections/Contact";
import { Link } from 'react-router-dom';



export default function Home() {
  return (
    <div className="">
      <Menubar className="bg-gray-200 text-black p-2 rounded">

        {/* Home Menu */}
        <MenubarMenu>
          <MenubarTrigger>Home</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Dashboard</MenubarItem>
            <MenubarItem>Settings</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        {/* Portfolio Menu */}
        <MenubarMenu>
          <MenubarTrigger>Portfolio</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Web Apps</MenubarItem>
            <MenubarItem>Designs</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        {/* Services Menu */}
        <MenubarMenu>
        <Link to="/services" >
            <MenubarTrigger >Services</MenubarTrigger>
          </Link>
          <MenubarContent>
            <MenubarItem>Tutoring</MenubarItem>
            <MenubarItem>Data Science</MenubarItem>
            <MenubarItem>Mentoring</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        {/* About Menu */}
        <MenubarMenu>
          <MenubarTrigger>About</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Education</MenubarItem>
            <MenubarItem>Skils</MenubarItem>
            <MenubarItem>Certifications</MenubarItem>
            <MenubarItem>Courses</MenubarItem>
            <MenubarItem>Research</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

      </Menubar>

      <Hero />
      <Portfolio />
      <Services />
      <Contact /> 
    </div>
  );
}

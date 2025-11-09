import {Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator, MenubarShortcut,} from "@/components/ui/menubar";
import Hero from "../components/sections/Hero";
import Portfolio from "../components/sections/Portfolio";
import Services from "../components/sections/Services";
import Contact from "../components/sections/Contact";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';




export default function Home() {
  return (
    <div className="">
      <Menubar className="bg-gray-200 text-black p-2 rounded">

        {/* Home Menu */}
        <MenubarMenu>
          <MenubarTrigger>Home</MenubarTrigger>
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
            <HashLink smooth to="/services#tutoring">
              <MenubarItem>Tutoring</MenubarItem>
            </HashLink>
            <HashLink smooth to="/services#datascience">
            <MenubarItem>Data Science</MenubarItem>
            </HashLink>
            <HashLink smooth to="/services#mentoring">
              <MenubarItem>Mentoring</MenubarItem>
            </HashLink>
            
          </MenubarContent>
        </MenubarMenu>

        {/* About Menu */}
        <MenubarMenu>
          <Link to="/about">
          <MenubarTrigger>About</MenubarTrigger>
          </Link>
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

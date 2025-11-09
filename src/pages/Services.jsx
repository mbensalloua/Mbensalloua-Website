import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
} from "@/components/ui/menubar";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Tutoring from "../components/sections/Tutoring";
import Datascience from "../components/sections/Datascience";
import Mentoring from "../components/sections/Mentoring";

export default function Services() {
  return (
    <div className="">
      {/* === Navbar === */}
      <Menubar className="bg-gray-200 text-black p-2 rounded">
        {/* Home */}
        <MenubarMenu>
          <Link to="/">
            <MenubarTrigger>Home</MenubarTrigger>
          </Link>
        </MenubarMenu>

        {/* Tutoring */}
        <MenubarMenu>
          <HashLink smooth to="/services#tutoring">
            <MenubarTrigger>Tutoring</MenubarTrigger>
          </HashLink>
        </MenubarMenu>

        {/* Data Science */}
        <MenubarMenu>
          <HashLink smooth to="/services#datascience">
            <MenubarTrigger>Data Science</MenubarTrigger>
          </HashLink>
        </MenubarMenu>

        {/* Mentoring */}
        <MenubarMenu>
          <HashLink smooth to="/services#mentoring">
            <MenubarTrigger>Mentoring</MenubarTrigger>
          </HashLink>
        </MenubarMenu>

        {/* About */}
        <MenubarMenu>
          <Link to="/about">
            <MenubarTrigger>About</MenubarTrigger>
          </Link>
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

      {/* === Sections === */}
      <Tutoring />
      <Datascience />
      <Mentoring />
    </div>
  );
}

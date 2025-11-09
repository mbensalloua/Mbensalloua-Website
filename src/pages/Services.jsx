import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
} from "@/components/ui/menubar";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Tutoring from "../components/sections/Tutoring";
import Datascience from "../components/sections/Datascience";
import Mentoring from "../components/sections/Mentoring";
// import Payments from "../components/sections/Payments";


export default function Services() {
  return (
    <div className="">
      <Menubar className="bg-gray-200 text-black p-2 rounded">

        <MenubarMenu>
        <Link to="/" >
          <MenubarTrigger >Home</MenubarTrigger>
        </Link>
        </MenubarMenu>

        {/* Home Menu */}
        <MenubarMenu>
          <HashLink smooth to="/services#tutoring">
            <MenubarTrigger>Tutoring</MenubarTrigger>
          </HashLink>
        </MenubarMenu>

        {/* Portfolio Menu */}
        <MenubarMenu>
          <HashLink smooth to= "/services#datascience">
            <MenubarTrigger>Data Science</MenubarTrigger>
          </HashLink>
        </MenubarMenu>

        {/* Services Menu */}
        <MenubarMenu>
          <HashLink smooth to ="/services#mentoring">
            <MenubarTrigger>Mentoring</MenubarTrigger>
          </HashLink>
        </MenubarMenu>

        {/* About Menu */}
        <MenubarMenu>
          <Link to ="/about">
          <MenubarTrigger>About</MenubarTrigger>
          </Link>
            </MenubarMenu>
      </Menubar>


{/* sections */}

    <Tutoring />
    <Datascience />
    <Mentoring />

    </div>
  );
}

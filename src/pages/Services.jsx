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


export default function Home() {
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
          <MenubarTrigger>Tutoring</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Dashboard</MenubarItem>
            <MenubarItem>Settings</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        {/* Portfolio Menu */}
        <MenubarMenu>
          <MenubarTrigger>Data Science</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Web Apps</MenubarItem>
            <MenubarItem>Designs</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        {/* Services Menu */}
        <MenubarMenu>
          <MenubarTrigger>Mentoring</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Consulting</MenubarItem>
            <MenubarItem>Development</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        {/* About Menu */}
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
    </div>
  );
}

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function Sidebar() {
  return (
    <aside className="w-64 p-4 border-r bg-white">
      <NavigationMenu>
        <NavigationMenuList className="flex flex-col space-y-2">
          <NavigationMenuItem>
            <NavigationMenuTrigger>About</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="#hero">Overview</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Skills</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="#skills">See Skills</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Certifications</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="#certifications">
                View Certs
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="#contact">Get in Touch</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </aside>
  );
}

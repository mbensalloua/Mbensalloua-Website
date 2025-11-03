import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// --- REMOVED: ChevronDownIcon, MoreHorizontal, DropdownMenu, InputGroup... ---
// --- ADDED: Select component primitives ---
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

// DEFINITION OF THE NEW COMPONENT (REPLACING InputGroupDropdown)
export function SelectDemo() { 
  return (
    <div className="grid w-full gap-2"> 
        <Label htmlFor="service-select">Service Category</Label>
        <Select>
            <SelectTrigger id="service-select" className="w-full"> {/* Changed width to w-full */}
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Services</SelectLabel>
                    <SelectItem value="tutoring">Tutoring</SelectItem>
                    <SelectItem value="datascience">Data Science</SelectItem>
                    <SelectItem value="mentoring">Mentoring</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    </div>
  )
}
// END OF NEW SELECT FUNCTION

// MAIN CONTACT COMPONENT (FIXED FOR EXPORT)
export default function Contact() {
  return (
    <section className="py-16 flex justify-center w-full">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle>Contact</CardTitle>
          <CardDescription>
            Enter your requested service
          </CardDescription>
          <div className="flex justify-end pt-2"></div>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Name</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter name"
                  required
                />


              </div>

              
              
            
           
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />


              </div>

              
              <SelectDemo /> 

              <Textarea placeholder="Type your message here." />
              
            </div>

          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Send
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
"use client";

import React, { useRef, useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "emailjs-com"; // Make sure emailjs-com is installed

// SERVICE SELECT COMPONENT
export function SelectDemo({ value, onChange }) {
  return (
    <div className="grid w-full gap-2">
      <Label htmlFor="service-select">Service Category</Label>
      <Select onValueChange={onChange} value={value}>
        <SelectTrigger id="service-select" className="w-full">
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
  );
}

// MAIN CONTACT FORM
export default function Contact() {
  const formRef = useRef();
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!service) {
      alert("Please select a service.");
      return;
    }

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // replace with EmailJS service ID
        "YOUR_TEMPLATE_ID", // replace with EmailJS template ID
        formRef.current,
        "YOUR_USER_ID" // replace with your EmailJS public key/user ID
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully!");
          formRef.current.reset();
          setService("");
        },
        (error) => {
          console.error("Email sending error:", error.text);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <section className="py-16 flex justify-center w-full">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle>Contact</CardTitle>
          <CardDescription>Enter your requested service</CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="user_name"
                  type="text"
                  placeholder="Enter name"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="user_email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>

              {/* Service Dropdown */}
              <SelectDemo value={service} onChange={setService} />
              <input type="hidden" name="service_category" value={service} />

              <Textarea
                name="message"
                placeholder="Type your message here."
                required
              />
            </div>

            <CardFooter className="flex-col gap-2 mt-4">
              <Button type="submit" className="w-full">
                Send
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}

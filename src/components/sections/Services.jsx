import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { BookOpen, Brain, Lightbulb } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Tutoring",
      icon: <BookOpen className="w-10 h-10 text-primary" />,
      description:
        "Personalized math and data tutoring designed to help students build confidence, clarity, and problem-solving skills.",
    },
    {
      title: "Data Science & Machine Learning",
      icon: <Brain className="w-10 h-10 text-primary" />,
      description:
        "Hands-on guidance in data analytics, visualization, and applied machine learning projects for research or career development.",
    },
    {
      title: "Mentoring",
      icon: <Lightbulb className="w-10 h-10 text-primary" />,
      description:
        "Career and academic mentorship that inspires growth, focus, and leadership through collaboration and curiosity.",
    },
  ];

  return (
    <section className="w-full py-16 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-shadow duration-300 rounded-2xl border-muted"
            >
              <CardHeader className="flex flex-col items-center space-y-4">
                <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-center">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 italic">
          
        </p>
      </div>
    </section>
  );
}

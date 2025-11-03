"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Tutoring plans with detailed content
const tutoringPlans = [
  {
    title: "Starter",
    subtitle: "",
    price: "$200",
    features: [
      "Introduction to Python or R for Data Science",
      "Help with data cleaning and visualization",
      "Support on small academic or personal projects",
      "2 personalized 1-on-1 sessions",
      "Feedback and resources for continued learning",
    ],
  },
  {
    title: "Pro-Package",
    subtitle: "",
    price: "$600",
    features: [
      "Hands-on guidance through end-to-end data projects",
      "Support in machine learning algorithms (regression, classification, clustering)",
      "Project structure, evaluation, and optimization",
      "Up to 6 personalized sessions + progress tracking",
      "Access to templates, datasets, and learning materials",
    ],
  },
  {
    title: "Fully Customized Plan",
    subtitle: "",
    price: "$1,5000",
    features: [
      "Deep-dive consulting or project mentorship",
      "Custom machine learning model development and evaluation",
      "Guidance in data storytelling and visualization for presentation",
      "Review of code, results, and final reporting",
      "Flexible session structure, ongoing communication, and project support",
    ],
  },
];

export default function Tutoring() {
  return (
    <section className="py-12 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-12">Data Science & Macine Learning</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {tutoringPlans.map((plan, idx) => (
          <Card
            key={idx}
            className="flex flex-col p-6 shadow-sm hover:shadow-md transition-all rounded-2xl"
            style={{
              transform: `translateY(${idx * 40}px)`, // stagger effect
              transition: "transform 0.3s ease",
            }}
          >
            <CardHeader>
              <CardTitle className="text-xl font-bold">{plan.title}</CardTitle>
              <Separator className="my-2" />
              <div className="text-gray-700">{plan.subtitle}</div>
            </CardHeader>
            <CardContent className="mt-4 flex flex-col gap-2">
              <ul className="list-disc list-inside text-gray-700">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx}>{feature}</li>
                ))}
              </ul>
              <div className="mt-4 text-lg font-semibold text-green-600">{plan.price}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

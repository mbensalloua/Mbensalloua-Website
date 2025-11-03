"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Tutoring plans with detailed content
const tutoringPlans = [
  {
    title: "1-on-1 Tutoring",
    subtitle: "1 hour session",
    price: "$60",
    features: [
      "Personalized, one-on-one instruction",
      "Focus on your chosen subject (Math • Python • R • Data Science)",
      "Problem-solving and guided practice",
      "Session summary and follow-up resources",
    ],
  },
  {
    title: "4-hour Tutoring Package",
    subtitle: "Four 1-hour sessions",
    price: "$199",
    features: [
      "Custom learning plan for your goals",
      "Weekly progress tracking",
      "Q&A and feedback between sessions",
    ],
  },
  {
    title: "Fully Customized Plan",
    subtitle: "Flexible Scheduling",
    price: "$200+",
    features: [
      "Comprehensive assessment of your needs and goals",
      "Custom study plan and learning materials",
      "Ongoing mentorship and progress tracking",
      "Support in multiple areas (Math • Statistics • Python • R • Data Science)",
    ],
  },
];

export default function Tutoring() {
  return (
    <section className="py-12 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-12">Tutoring Services</h2>

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

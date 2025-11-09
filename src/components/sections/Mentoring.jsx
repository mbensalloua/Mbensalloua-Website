"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Tutoring plans with detailed content
const tutoringPlans = [
  {
    title: "Counseling",
    subtitle: "Two 1-hour mentoring sessions",
    price: "$80–$100",
    features: [
      "Two 1-hour mentoring sessions",
      "Personalized academic or career guidance (Math • Data Science • Research Support)",
      "Q&A and action steps to help you move forward",
      "Follow-up email summary and resources",
    ],
  },
  {
    title: "Advisor",
    subtitle: "Four 1-hour sessions",
    price: "$199",
    features: [
      "Goal-setting and progress tracking",
      "Career and learning plan development",
      "Feedback on projects, resumes, or research ideas",
    ],
  },
  {
    title: "Mentor",
    subtitle: "Twelve 1-hour mentoring sessions",
    price: "$550–$600",
    features: [
      "Fully customized plan based on your goals",
      "Guidance in academic success, data science projects, and professional pathways",
      "Priority access to feedback, communication, and ongoing support",
    ],
  },
];

export default function Tutoring() {
  return (
    <section id= "mentoring" className="py-12 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-12"> Mentoring</h2>

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

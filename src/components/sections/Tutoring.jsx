"use client"

import React from "react"
import { Separator } from "@/components/ui/separator"

// Define data for the cards
const tutoringItems = [
  { title: "1-on-1", subtitle: "Tutoring", price: "$60" },
  { title: "Group", subtitle: "Sessions", price: "$40" },
  { title: "Workshops", subtitle: "Bootcamps", price: "$90" },
]

export default function Tutoring() {
  return (
    <section className="py-12 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-8">Tutoring Services</h2>

      {/* 3x3 grid */}
      <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto px-8">
        {tutoringItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all relative"
            style={{
              transform: `translateY(${(index % 3) * 50}px)`, // creates diagonal stagger
              transition: "transform 0.3s ease",
            }}
          >
            <div className="text-xl font-bold">{item.title}</div>
            <Separator className="my-2 w-8" />
            <div className="text-gray-700">{item.subtitle}</div>
            <Separator className="my-2 w-8" />
            <div className="text-lg font-semibold text-green-600">{item.price}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

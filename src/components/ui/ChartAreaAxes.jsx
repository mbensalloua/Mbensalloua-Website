"use client"

import React from "react"
import { TrendingUp } from "lucide-react"
import { AreaChart, Area, CartesianGrid, XAxis, YAxis } from "recharts" // Removed Tooltip from here
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card"
// Import the core chart components from your ui/chart.jsx file
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart" 

export const description = "An area chart with axes"

const chartData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
]

// Define the chart configuration with theme colors
const chartConfig = {
  // Use Tailwind CSS colors via CSS variables defined by Shadcn's chart utility
  desktop: { label: "Desktop", color: "hsl(var(--chart-1))" }, // Example: Default chart color 1
  mobile: { label: "Mobile", color: "hsl(var(--chart-2))" },  // Example: Default chart color 2
}

// Renamed the function for clarity
export function AnalyticsAreaChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Analytics Overview</CardTitle>
        <CardDescription>Showing total visitors for the last 6 months</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <AreaChart
            data={chartData}
            margin={{ left: -10, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} tickCount={3} />
            
            {/* Use Shadcn's themed Tooltip */}
            <ChartTooltip content={<ChartTooltipContent />} /> 
            
            <Area
              dataKey="mobile"
              type="natural"
              // Use CSS variables for themed colors
              fill="var(--color-mobile)" 
              fillOpacity={0.3}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              // Use CSS variables for themed colors
              fill="var(--color-desktop)"
              fillOpacity={0.3}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        {/* ... (Footer content remains the same) ... */}
      </CardFooter>
    </Card>
  )
}
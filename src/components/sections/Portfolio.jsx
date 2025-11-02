// sections/Portfolio.jsx

import React from 'react';
// Import the renamed component from the ui folder
import { AnalyticsAreaChart } from "@/components/ui/ChartAreaAxes"; 

export default function Portfolio() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-4xl font-extrabold mb-8 text-center">Portfolio</h2>

      {/* Use Tailwind Grid to lay out the charts */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Chart 1 */}
        <AnalyticsAreaChart /> 
        
        {/* Chart 2 (You can customize props if you need different data/configs) */}
        <AnalyticsAreaChart />
        
        {/* Chart 3 */}
        <AnalyticsAreaChart />
      </div>
    </section>
  );
}
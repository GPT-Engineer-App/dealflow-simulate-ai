import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const InteractiveGraph = () => {
  const [startups, setStartups] = useState(100);
  const [hoursPerStartup, setHoursPerStartup] = useState(5);
  const hourlyRate = 80;

  const generateData = () => {
    return Array.from({ length: 12 }, (_, i) => {
      const month = i + 1;
      const startupsScreened = startups * month;
      const hoursSaved = startupsScreened * hoursPerStartup;
      const costsSaved = hoursSaved * hourlyRate;
      return {
        month: `Month ${month}`,
        startupsScreened,
        hoursSaved,
        costsSaved
      };
    });
  };

  const data = generateData();

  return (
    <div className="space-y-4">
      <div className="flex space-x-4">
        <div>
          <Label htmlFor="startups">Startups per Month</Label>
          <Input
            id="startups"
            type="number"
            value={startups}
            onChange={(e) => setStartups(Number(e.target.value))}
            min="1"
          />
        </div>
        <div>
          <Label htmlFor="hours">Hours Saved per Startup</Label>
          <Input
            id="hours"
            type="number"
            value={hoursPerStartup}
            onChange={(e) => setHoursPerStartup(Number(e.target.value))}
            min="0.1"
            step="0.1"
          />
        </div>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="startupsScreened" stroke="#8884d8" name="Startups Screened" />
          <Line yAxisId="left" type="monotone" dataKey="hoursSaved" stroke="#82ca9d" name="Hours Saved" />
          <Line yAxisId="right" type="monotone" dataKey="costsSaved" stroke="#ffc658" name="Costs Saved ($)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InteractiveGraph;

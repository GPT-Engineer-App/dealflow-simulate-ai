import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const ProcessComparison = () => {
  const steps = [
    { name: "Deal Submission", aiTime: "Instant", manualTime: "1-2 hours" },
    { name: "Initial Screening", aiTime: "Seconds", manualTime: "2-4 hours" },
    { name: "Due Diligence", aiTime: "Minutes", manualTime: "Days to Weeks" },
    { name: "Risk Assessment", aiTime: "Seconds", manualTime: "Hours to Days" },
    { name: "Decision Making", aiTime: "Instant", manualTime: "Days to Weeks" },
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">AI vs Traditional Process Comparison</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Process Step</TableHead>
            <TableHead>AI-Driven Time</TableHead>
            <TableHead>Traditional Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {steps.map((step) => (
            <TableRow key={step.name}>
              <TableCell>{step.name}</TableCell>
              <TableCell>{step.aiTime}</TableCell>
              <TableCell>{step.manualTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProcessComparison;

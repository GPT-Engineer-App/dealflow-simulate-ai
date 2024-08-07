import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const Dashboard = ({ deals }) => {
  const statusCounts = deals.reduce((acc, deal) => {
    acc[deal.status] = (acc[deal.status] || 0) + 1;
    return acc;
  }, {});

  const data = Object.entries(statusCounts).map(([name, value]) => ({ name, value }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Deal Flow Dashboard</h2>
      <div className="flex justify-center">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Deal Statistics</h3>
        <ul>
          <li>Total Deals: {deals.length}</li>
          <li>Pending: {statusCounts['Pending'] || 0}</li>
          <li>Approved: {statusCounts['Approved'] || 0}</li>
          <li>Rejected: {statusCounts['Rejected'] || 0}</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

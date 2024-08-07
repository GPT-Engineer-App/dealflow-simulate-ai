import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import ProcessComparison from './ProcessComparison';

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">Deal Status Distribution</h3>
          <PieChart width={400} height={300}>
            <Pie
              data={data}
              cx={200}
              cy={150}
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
        <div>
          <h3 className="text-xl font-semibold mb-2">Deal Statistics</h3>
          <ul className="space-y-2">
            <li>Total Deals: {deals.length}</li>
            <li>Pending: {statusCounts['Pending'] || 0}</li>
            <li>Approved: {statusCounts['Approved'] || 0}</li>
            <li>Rejected: {statusCounts['Rejected'] || 0}</li>
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <ProcessComparison />
      </div>
    </div>
  );
};

export default Dashboard;

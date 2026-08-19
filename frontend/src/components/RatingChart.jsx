import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ratingData = [
  { month: "Dec", rating: 980 },
  { month: "Jan", rating: 1040 },
  { month: "Feb", rating: 1130 },
  { month: "Mar", rating: 1240 },
  { month: "Apr", rating: 1390 },
  { month: "May", rating: 1540 },
];

function RatingChart() {
  return (
    <div className="dashboard-card rating-chart-card">
      <div className="card-header">
        <h2>Rating Progress</h2>
        <span>Last 6 months</span>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={ratingData}>
            <CartesianGrid stroke="#1e293b" />
            <XAxis dataKey="month" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="rating"
              stroke="#7c3aed"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default RatingChart;

function StatCard({ title, value, subtitle }) {
  return (
    <div className="stat-card">
      <p className="stat-card-title">{title}</p>

      <h2 className="stat-card-value">{value}</h2>

      <p className="stat-card-subtitle">{subtitle}</p>
    </div>
  );
}

export default StatCard;

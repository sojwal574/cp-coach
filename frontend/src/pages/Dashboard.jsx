import StatCard from "../components/StatCard";
import RatingChart from "../components/RatingChart";
import SkillOverview from "../components/SkillOverview";
import RecommendationList from "../components/RecommendationList";
import AIInsight from "../components/AIInsight";

function Dashboard() {
  return (
    <>
      <h1 className="page-title">Dashboard</h1>

      <p className="page-subtitle">
        Your competitive programming progress at a glance.
      </p>

      <section className="stats-grid">
        <StatCard
          title="Codeforces Rating"
          value="1540"
          subtitle="↑ 120 this month"
        />

        <StatCard
          title="Problems Solved"
          value="842"
          subtitle="412 Easy · 318 Medium · 112 Hard"
        />

        <StatCard
          title="Contests Attended"
          value="48"
          subtitle="32 Rated · 16 Unrated"
        />

        <StatCard
          title="Current Streak"
          value="12 days"
          subtitle="Best: 28 days"
        />
      </section>

      <section className="dashboard-grid two-column">
        <RatingChart />
        <SkillOverview />
      </section>

      <section className="dashboard-grid">
        <RecommendationList />
      </section>

      <section className="dashboard-grid">
        <AIInsight />
      </section>
    </>
  );
}

export default Dashboard;

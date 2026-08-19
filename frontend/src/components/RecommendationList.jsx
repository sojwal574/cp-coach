const recommendations = [
  {
    title: "DP on Trees",
    rating: 1500,
    tags: ["DP", "Trees"],
    match: "92%",
  },
  {
    title: "Dijkstra and State",
    rating: 1600,
    tags: ["Graphs", "Shortest Paths"],
    match: "87%",
  },
  {
    title: "String Hashing",
    rating: 1400,
    tags: ["Strings", "Hashing"],
    match: "81%",
  },
  {
    title: "Divide and Conquer DP",
    rating: 1700,
    tags: ["DP", "Divide & Conquer"],
    match: "76%",
  },
];

function RecommendationList() {
  return (
    <div className="dashboard-card">
      <div className="card-header">
        <h2>Recommended for You</h2>
        <span>View All</span>
      </div>

      <div className="recommendation-list">
        {recommendations.map((problem) => (
          <div className="recommendation-item" key={problem.title}>
            <div className="recommendation-main">
              <h3>{problem.title}</h3>

              <div className="recommendation-tags">
                {problem.tags.map((tag) => (
                  <span className="problem-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="recommendation-meta">
              <span className="problem-rating">{problem.rating}</span>

              <span className="match-score">{problem.match} match</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendationList;

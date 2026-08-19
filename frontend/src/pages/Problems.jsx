import { useEffect, useState } from "react";
import { getProblems } from "../services/api";

function Problems() {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProblems()
      .then((response) => {
        setProblems(response.data);
      })
      .catch(() => {
        setError("Failed to load problems");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading problems...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <h1 className="page-title">Problems</h1>

      <p className="page-subtitle">Practice problems selected for CP Coach.</p>

      <div className="problems-list">
        {problems.map((problem) => (
          <div className="dashboard-card" key={problem.id}>
            <h2>{problem.name}</h2>

            <p>Rating: {problem.rating}</p>

            <div className="recommendation-tags">
              {problem.tags.map((tag) => (
                <span className="problem-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Problems;

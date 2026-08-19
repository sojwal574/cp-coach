function AIInsight() {
  return (
    <div className="dashboard-card ai-insight">
      <div className="ai-insight-header">
        <div>
          <span className="ai-badge">✨ AI COACH</span>

          <h2>Your Current Focus</h2>
        </div>

        <span className="ai-insight-topic">Dynamic Programming</span>
      </div>

      <p className="ai-insight-text">
        Dynamic Programming is currently one of your weakest areas. Your recent
        success rate is 42%, compared with your overall performance of 71%.
      </p>

      <div className="ai-recommendation">
        <span>Recommended action</span>

        <strong>
          Practice 3 DP problems around the 1400–1600 rating range.
        </strong>
      </div>

      <button className="ai-button">Open AI Coach</button>
    </div>
  );
}

export default AIInsight;

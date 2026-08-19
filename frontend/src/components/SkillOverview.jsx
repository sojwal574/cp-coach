const skills = [
  { name: "Dynamic Programming", score: 42 },
  { name: "Graphs", score: 65 },
  { name: "Greedy", score: 78 },
  { name: "Binary Search", score: 84 },
  { name: "Strings", score: 55 },
  { name: "Implementation", score: 75 },
];

function SkillOverview() {
  return (
    <div className="dashboard-card">
      <div className="card-header">
        <h2>Skill Overview</h2>
        <span>Current</span>
      </div>

      <div className="skill-list">
        {skills.map((skill) => (
          <div className="skill-item" key={skill.name}>
            <div className="skill-label">
              <span>{skill.name}</span>
              <span>{skill.score}%</span>
            </div>

            <div className="skill-bar">
              <div
                className="skill-bar-fill"
                style={{ width: `${skill.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillOverview;

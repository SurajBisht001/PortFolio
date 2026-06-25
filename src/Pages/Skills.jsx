const skills = [
  { category: "Frontend", items: [
    { name: "HTML", level: 93 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 65 },
  ]},
    { category: "Projects", items: [
    { name: "Weather App", level: 100 },
    { name: "Portfolio Website", level: 105 },
    { name: "Task Management App", level: 65 },
    { name: "EmpDaskBoard", level: 75 },
  ]},
  { category: "Tools", items: [
    { name: "Git & GitHub", level: 88 },
    { name: "VS Code", level: 95 },
    { name: "Figma", level: 60 },
    { name: "Vercel", level: 80 },
  ]},
];

export default function Skills() {
  return (
    <main className="page skills-page">
      <h2 className="page-title1">My Skills</h2>
      <p className="page-subtitle1">Technologies I work with regularly</p>

      <div className="skills-container">
        {skills.map((group) => (
          <div key={group.category} className="skill-group">
            <h3 className="skill-category">{group.category}</h3>
            <div className="skill-list">
              {group.items.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

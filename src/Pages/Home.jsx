export default function Home() {
  return (
    <main className="page home-page">
      <section className="home">
        <div className="home-text">
          <p className="home-eyebrow">👋 Hello, I'm</p>
          <h1 className="home-name">Suraj Singh Bisht</h1>
          <h2 className="home-role">Full Stack Developer</h2>
          <p className="home-bio">
            I'm a passionate developer specializing in building modern web applications with React and Node.js
             I love creating efficient code and learning new technologies to solve real-world problems
          </p>
          <div className="home-actions">
            <a href="/contact" className="btn-primary">Hire Me</a>
            <a href="#about" className="btn-outline">About Me</a>
          </div>
        </div>
        <div className="home-avatar">
          <div className="avatar-circle">
  <img src="src/Pages/profileImg.jpeg" alt="SB" />
</div>
        </div>
      </section>

      <section className="about-section" id="about">
        <h3 className="section-title">About Me</h3>
        <div className="about-grid">
          <div className="about-card">
            <span className="about-icon">🎓</span>
            <h4>Education</h4>
            <p>B.Tech Computer Science<br /> Dronacharya College of Engineering, 2024</p>
          </div>
          <div className="about-card">
            <span className="about-icon">💼</span>
            <h4>Experience</h4>
            <p>2+ Years of building<br />Web Applications</p>
          </div>
          <div className="about-card">
            <span className="about-icon">📍</span>
            <h4>Location</h4>
            <p>Haryana, India<br />Open to remote</p>
          </div>
          <div className="about-card">
            <span className="about-icon">🚀</span>
            <h4>Goal</h4>
            <p>Building impactful<br />products at scale</p>
          </div>
        </div>
      </section>
    </main>
  );
}
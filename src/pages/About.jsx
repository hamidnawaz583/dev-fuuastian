import "../App.css";

function About() {
  return (
    <div className="about-page">

      {/* Header */}
      <section className="about-hero">
        <p className="small-title">ABOUT DEV FUUAST</p>

        <h1>
          More Than a
          <span> Society.</span>
        </h1>

        <p>
          DEV FUUAST is a student-driven technology community at
          FUUAST Islamabad focused on learning, building, collaboration,
          innovation, and practical experience.
        </p>
      </section>

      {/* Who We Are */}
      <section className="about-section">

        <div className="section-label">
          <span>01</span>
          <p>WHO WE ARE</p>
        </div>

        <div className="about-content">
          <h2>
            Creating opportunities for
            <span> students to build.</span>
          </h2>

          <p>
            DEV FUUAST brings together students interested in technology,
            programming, artificial intelligence, development, design,
            problem solving, and innovation.
          </p>

          <p>
            Our goal is to create an environment where students can
            learn beyond the classroom, work together, participate in
            practical activities, and turn ideas into real projects.
          </p>
        </div>

      </section>

      {/* Experience */}
      <section className="experience-section">

        <div className="experience-heading">
          <p className="small-title">THE FUUAST EXPERIENCE</p>

          <h2>
            Learn.
            <span> Build.</span>
            <br />
            Connect.
            <span> Lead.</span>
          </h2>

          <p>
            Your journey with DEV FUUAST is about more than attending
            events. It is about gaining experience and becoming part
            of a technology community.
          </p>
        </div>

        <div className="experience-grid">

          <div className="experience-card">
            <span>01</span>
            <h3>Learn</h3>
            <p>
              Learn new technologies through workshops, technical
              sessions, talks, and peer-to-peer learning.
            </p>
          </div>

          <div className="experience-card">
            <span>02</span>
            <h3>Build</h3>
            <p>
              Turn your knowledge into practical projects and work
              with other students to solve real problems.
            </p>
          </div>

          <div className="experience-card">
            <span>03</span>
            <h3>Compete</h3>
            <p>
              Take part in hackathons, programming competitions,
              challenges, and technology-based activities.
            </p>
          </div>

          <div className="experience-card">
            <span>04</span>
            <h3>Connect</h3>
            <p>
              Meet students, developers, mentors, speakers, and
              people who share your interest in technology.
            </p>
          </div>

          <div className="experience-card">
            <span>05</span>
            <h3>Lead</h3>
            <p>
              Develop leadership and communication skills by taking
              responsibility in projects, events, and society teams.
            </p>
          </div>

          <div className="experience-card">
            <span>06</span>
            <h3>Grow</h3>
            <p>
              Build confidence, experience, teamwork, and a portfolio
              that continues beyond university.
            </p>
          </div>

        </div>

      </section>

      {/* Mission */}
      <section className="mission-section">

        <div>
          <p className="small-title">OUR MISSION</p>

          <h2>
            Make technology
            <span> practical.</span>
          </h2>
        </div>

        <p>
          We aim to provide students with opportunities to learn,
          experiment, collaborate, and create. DEV FUUAST is intended
          to bridge the gap between academic learning and practical
          technology experience.
        </p>

      </section>

      {/* CTA */}
      <section className="about-cta">

        <p className="small-title">BECOME PART OF THE COMMUNITY</p>

        <h2>Ready to build something?</h2>

        <button className="primary-btn">
          Join DEV FUUAST
        </button>

      </section>

    </div>
  );
}

export default About;
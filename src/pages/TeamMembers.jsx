

const teamMembers = [
  {
    name: "Hamid Nawaz",
    role: "Chief Technology Officer (CTO)",
    field: "Full Stack Developer | AI/ML Enthusiast",
    achievement:
      "Hamid focuses on building modern digital solutions and exploring Artificial Intelligence and Machine Learning. As CTO, he helps guide the technical direction of DEV FUUAST and encourages students to turn ideas into real projects.",
    
  },

  {
    name: "Jawahir Ali",
    role: "Secretary",
    field: "AI Content Creator | Tech Advisor",
    achievement:
      "Jawahir contributes to the society through technology-focused content, AI awareness, and technical guidance. He aims to help students understand emerging technologies and make informed decisions about their learning and career paths.",
   
  },

  {
    name: "Faisal Rafeeq",
    role: "Media Member",
    field: "Lens Creator | Visual Storytelling",
    achievement:
      "Faisal is responsible for capturing the journey of DEV FUUAST through creative visuals and media. His work helps document events, projects, workshops, and the growth of our technology community.",
   
  },
];

const TeamMembers = () => {
  return (
    <div className="team-page">

      {/* ================= TEAM HERO ================= */}
      <section className="team-section" id="team">

        <div className="team-container">

          <div className="team-header">
            <span className="team-label">
              DEV FUUAST LEADERSHIP
            </span>

            <h1>
              Meet Our <span>Team</span>
            </h1>

            <p>
              DEV FUUAST is a student-driven technology community where
              students collaborate, learn new skills, build projects, and
              explore the future of technology together.
            </p>
          </div>


          {/* ================= TEAM CARDS ================= */}

          <div className="team-grid">

            {teamMembers.map((member, index) => (

              <div className="team-card" key={index}>

                {/* Small Circular Image */}
                <div className="team-image-wrapper">

                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-image"
                  />

                </div>


                {/* Member Information */}

                <div className="team-content">

                  <span className="team-member-number">
                    MEMBER {String(index + 1).padStart(2, "0")}
                  </span>

                  <h2>
                    {member.name}
                  </h2>

                  <span className="team-role">
                    {member.role}
                  </span>

                  <h4>
                    {member.field}
                  </h4>

                  <div className="team-line"></div>

                  <p>
                    {member.achievement}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= ABOUT DEV FUUAST ================= */}

      <section className="vision-section">

        <div className="vision-container">

          <div className="vision-header">

            <span className="team-label">
              OUR VISION
            </span>

            <h2>
              More Than Just a <span>Society</span>
            </h2>

            <p>
              DEV FUUAST aims to create a strong technology community where
              students from different departments can connect, collaborate,
              share ideas, and work together on meaningful projects.
            </p>

          </div>


          <div className="vision-grid">


            <div className="vision-card">

              <div className="vision-number">
                01
              </div>

              <h3>
                Learn Together
              </h3>

              <p>
                We expect FUUAST students to develop a habit of continuous
                learning. Technology changes quickly, and students should
                explore new tools, programming languages, Artificial
                Intelligence, software development, and other emerging fields.
              </p>

            </div>


            <div className="vision-card">

              <div className="vision-number">
                02
              </div>

              <h3>
                Build Real Projects
              </h3>

              <p>
                Learning theory is important, but building projects is where
                real growth happens. We encourage students to turn ideas into
                websites, applications, AI solutions, research projects, and
                other practical products.
              </p>

            </div>


            <div className="vision-card">

              <div className="vision-number">
                03
              </div>

              <h3>
                Collaborate Across Departments
              </h3>

              <p>
                Innovation does not belong to only one department. Students
                from AI, Computer Science, Software Engineering, Data Science,
                and other disciplines can work together and combine their
                different skills.
              </p>

            </div>


            <div className="vision-card">

              <div className="vision-number">
                04
              </div>

              <h3>
                Share Knowledge
              </h3>

              <p>
                We believe students grow faster when they help each other.
                Through workshops, discussions, technical sessions, and
                collaborative projects, students can share knowledge and
                improve together.
              </p>

            </div>


            <div className="vision-card">

              <div className="vision-number">
                05
              </div>

              <h3>
                Explore Innovation
              </h3>

              <p>
                DEV FUUAST encourages students to explore Artificial
                Intelligence, Machine Learning, Web Development, Mobile Apps,
                Cybersecurity, Cloud Computing, and other technologies shaping
                the future.
              </p>

            </div>


            <div className="vision-card">

              <div className="vision-number">
                06
              </div>

              <h3>
                Build for the Future
              </h3>

              <p>
                Our goal is to help students prepare for the real technology
                industry by developing practical skills, teamwork, creativity,
                problem-solving ability, and a strong project portfolio.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FINAL MESSAGE ================= */}

      <section className="join-section">

        <div className="join-content">

          <span className="team-label">
            THE DEV FUUAST COMMUNITY
          </span>

          <h2>
            Learn. Build. <span>Collaborate.</span>
          </h2>

          <p>
            Whether you are an AI student, developer, designer, content
            creator, researcher, or simply someone interested in technology,
            DEV FUUAST is a place to learn, contribute, and grow with other
            passionate students.
          </p>

          <p className="join-quote">
            "Great things are not built alone. They are built by people who
            learn together, share ideas, and turn possibilities into reality."
          </p>

        </div>

      </section>

    </div>
  );
};

export default TeamMembers;
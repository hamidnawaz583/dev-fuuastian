function Events() {
  return (
    <div className="events-page">

      <section className="events-hero">
        <p className="small-title">DEV FUUAST EVENTS</p>

        <h1>
          Learn.
          <span> Build.</span>
          <br />
          Experience.
        </h1>

        <p>
          Workshops, competitions, technical sessions, hackathons,
          and community activities designed to help students gain
          practical technology experience.
        </p>
      </section>

      <section className="events-section">

        <div className="section-label">
          <span>01</span>
          <p>UPCOMING EVENTS</p>
        </div>

        <div className="events-grid">

          <div className="event-card">
            <span>EVENT 01</span>
            <h2>Tech Workshop</h2>
            <p>
              A hands-on session focused on learning modern
              technology and development skills.
            </p>

            <div className="event-info">
              <span>Date: TBA</span>
              <span>Location: TBA</span>
            </div>

            <button className="primary-btn">
              View Event
            </button>
          </div>

          <div className="event-card">
            <span>EVENT 02</span>
            <h2>Programming Challenge</h2>
            <p>
              Test your programming and problem-solving skills
              through practical challenges.
            </p>

            <div className="event-info">
              <span>Date: TBA</span>
              <span>Location: TBA</span>
            </div>

            <button className="primary-btn">
              View Event
            </button>
          </div>

          <div className="event-card">
            <span>EVENT 03</span>
            <h2>Developer Meetup</h2>
            <p>
              Connect with fellow students and discuss ideas,
              projects, and technology.
            </p>

            <div className="event-info">
              <span>Date: TBA</span>
              <span>Location: TBA</span>
            </div>

            <button className="primary-btn">
              View Event
            </button>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Events;
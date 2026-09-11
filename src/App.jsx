
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Events from "./pages/Events";
import About from "./pages/About";
import Signup from "./pages/Signup";
import TeamMembers from "./pages/TeamMembers";
import "./App.css";

function Home() {
  const [ setBackendMessage] = useState("");


  return (
    <div className="app">

      {/* Navigation */}
      <nav className="navbar">

        <Link to="/" className="logo">
          <span className="logo-dev">DEV</span>
          <span className="logo-fuuast">FUUAST</span>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/events">Events</Link>
          <Link to="/team">Team</Link>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-buttons">

          <Link to="/login" className="login-btn">
            Login
          </Link>

          <Link to="/signup" className="signup-btn">
            Sign Up
          </Link>

        </div>

      </nav>


      {/* Hero Section */}
      <main className="hero-section" id="home">
        

        <div className="hero-content">

          <p className="small-title">
            FUUAST ISLAMABAD
          </p>

          <h1>
            Build.
            <br />
            <span>Create.</span>
            <br />
            Innovate.
          </h1>

          <p className="hero-description">
            Welcome to DEV FUUAST — a technology and development society
            where students learn, build projects, participate in events,
            and grow together.
          </p>

          <div className="hero-buttons">

            <Link to="/signup" className="primary-btn">
              Join DEV FUUAST
            </Link>

            <Link to="/events" className="secondary-btn">
              Explore Events
            </Link>

          </div>

        </div>

      </main>


      {/* Information Section */}
      <section
        className="info-section"
        id="events"
      >

        <div className="info-card">

          <h3>01</h3>

          <h4>Learn</h4>

          <p>
            Learn modern technologies through workshops
            and technical sessions.
          </p>

        </div>


        <div className="info-card">

          <h3>02</h3>

          <h4>Build</h4>

          <p>
            Turn your ideas into real projects with
            other students.
          </p>

        </div>


        <div className="info-card">

          <h3>03</h3>

          <h4>Connect</h4>

          <p>
            Meet developers, students, mentors,
            and technology enthusiasts.
          </p>

        </div>

      </section>


      {/* Contact Section */}
      <section
        id="contact"
        className="contact-section"
      >

        <h2>
          Contact DEV FUUAST
        </h2>

        <p>
          Connect with our technology community.
        </p>

      </section>

    </div>
  );
}


function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Events */}
        <Route
          path="/events"
          element={<Events />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* About */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* Team Members */}
        <Route
          path="/team"
          element={<TeamMembers />}
        />

        {/* Signup */}
        <Route
          path="/signup"
          element={<Signup />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
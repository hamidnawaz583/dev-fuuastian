import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.detail || "Signup failed.");
        return;
      }

      setMessage("Account created successfully!");

      setTimeout(() => {
        navigate("/login");
      }, 1000);

    } catch (error) {
      setMessage("Cannot connect to the backend.");
      console.error(error);
    }
  };

  return (
    <div className="signup-page">

      <div className="signup-header">

        <Link to="/" className="logo">
          <span className="logo-dev">DEV</span>
          <span className="logo-fuuast">FUUAST</span>
        </Link>

        <p>
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>

      <main className="signup-container">

        <div className="signup-intro">

          <p className="small-title">
            JOIN DEV FUUAST
          </p>

          <h1>
            Build your
            <span> future.</span>
          </h1>

          <p>
            Create your DEV FUUAST account and become part
            of a community where students learn, build,
            collaborate, and grow together.
          </p>

        </div>

        <div className="signup-card">

          <div className="signup-card-header">

            <h2>Create Account</h2>

            <p>
              Enter your information to get started.
            </p>

          </div>

          <form onSubmit={handleSignup}>

            <div className="input-group">

              <label>Full Name</label>

              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />

            </div>

            <div className="input-group">

              <label>Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />

            </div>

            <div className="input-group">

              <label>Password</label>

              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />

            </div>

            <div className="input-group">

              <label>Confirm Password</label>

              <input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
              />

            </div>

            <label className="terms">

              <input
                type="checkbox"
                required
              />

              <span>
                I agree to the DEV FUUAST terms and conditions.
              </span>

            </label>

            <button
              type="submit"
              className="signup-submit"
            >
              Create Account
            </button>

          </form>

          {message && (
            <p style={{ marginTop: "15px", textAlign: "center" }}>
              {message}
            </p>
          )}

          <div className="signup-divider">
            <span>OR</span>
          </div>

          <p className="login-text">

            Already have an account?

            <Link to="/login">
              {" "}Login
            </Link>

          </p>

        </div>

      </main>

    </div>
  );
}

export default Signup;
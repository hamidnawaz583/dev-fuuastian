
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.detail || "Login failed.");
        return;
      }

      setMessage("Login successful!");

      setTimeout(() => {
        navigate("/");
      }, 800);

    } catch (error) {
      setMessage("Cannot connect to the backend.");
      console.error(error);
    }
  };

  return (
    <div className="login-page">

      {/* Header */}
      <header className="login-header">

        <Link to="/" className="logo">
          <span className="logo-dev">DEV</span>
          <span className="logo-fuuast">FUUAST</span>
        </Link>

        <p>
          Don't have an account?
          <Link to="/signup"> Sign Up</Link>
        </p>

      </header>


      {/* Main */}
      <main className="login-container">

        {/* Left Side */}
        <section className="login-intro">

          <p className="small-title">
            DEV FUUAST
          </p>

          <h1>
            Welcome
            <span> back.</span>
          </h1>

          <p>
            Sign in to your DEV FUUAST account and
            continue learning, building, and connecting
            with the community.
          </p>

        </section>


        {/* Login Card */}
        <section className="login-card">

          <div className="login-card-header">

            <h2>
              Welcome Back
            </h2>

            <p>
              Enter your information to continue.
            </p>

          </div>


          <form onSubmit={handleLogin}>

            <div className="input-group">

              <label>
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />

            </div>


            <div className="input-group">

              <label>
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />

            </div>


            <div className="login-options">

              <label>
                <input type="checkbox" />
                Remember me
              </label>

              <a href="#forgot">
                Forgot password?
              </a>

            </div>


            <button
              type="submit"
              className="login-submit"
            >
              Login
            </button>

          </form>


          {message && (
            <p style={{ marginTop: "15px", textAlign: "center" }}>
              {message}
            </p>
          )}


          <div className="login-divider">
            <span>OR</span>
          </div>


          <p className="signup-text">

            Don't have an account?

            <Link to="/signup">
              {" "}Create Account
            </Link>

          </p>

        </section>

      </main>

    </div>
  );
}

export default Login;


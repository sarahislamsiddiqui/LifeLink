import { Link } from "react-router-dom";
import "../styles/home.css";
import heroImage from "../assets/images/hero-image.png";

function Home() {
  return (
    <div className="home">

      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-content">

          <div className="hero-badge">
            ❤️ Trusted Blood Donation Platform
          </div>

          <h1>
            Every Donation. Every Connection. Every Life Matters.
          </h1>

          <p>
            LifeLink is a modern blood donation platform that connects
            volunteer donors, patients, and hospitals in one place.
            Quickly register as a donor, search for compatible blood
            donors, and make life-saving connections when every minute
            matters.
          </p>

          <div className="hero-buttons">

            <Link to="/register">
              <button className="donor-btn">
                Become a Donor
              </button>
            </Link>

            <Link to="/search">
              <button className="search-btn">
                Find a Donor
              </button>
            </Link>

          </div>

        </div>

        <img
          src={heroImage}
          alt="LifeLink Hero"
          className="hero-image"
        />

      </section>

      {/* ================= WHY DONATE ================= */}

      <section className="why-donate">

        <h2>Why Donate Through LifeLink?</h2>

        <div className="why-cards">

          <div className="why-card">
            <h3>❤️ Save Lives</h3>

            <p>
              One blood donation can save multiple lives and give
              patients another chance when they need it the most.
            </p>

          </div>

          <div className="why-card">
            <h3>⚡ Faster Emergency Response</h3>

            <p>
              Quickly connect patients with nearby blood donors during
              emergencies, surgeries, and critical situations.
            </p>

          </div>

          <div className="why-card">
            <h3>🤝 Stronger Community</h3>

            <p>
              Join a growing network of generous donors working together
              to make healthcare more accessible for everyone.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;
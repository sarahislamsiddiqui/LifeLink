import "../styles/home.css";

function Home() {
  return (
    <div className="home">

      <section className="hero">

        <h1>Donate Blood, Save Lives</h1>

        <p>
          Every drop counts. Join LifeLink and become a hero by helping
          patients in need of blood.
        </p>

        <div className="hero-buttons">

          <button className="donor-btn">
            Become a Donor
          </button>

          <button className="search-btn">
            Find a Donor
          </button>

        </div>

    </section>

<section className="stats">

  <div className="card">
    <h2>1500+</h2>
    <p>Total Donors</p>
  </div>

  <div className="card">
    <h2>320</h2>
    <p>Blood Requests</p>
  </div>

  <div className="card">
    <h2>45</h2>
    <p>Partner Hospitals</p>
  </div>

</section>
<section className="why-donate">

  <h2>Why Donate Blood?</h2>

  <div className="why-cards">

    <div className="why-card">
      <h3>❤️ Save Lives</h3>
      <p>
        A single blood donation can help save up to three lives.
      </p>
    </div>

    <div className="why-card">
      <h3>⚡ Emergency Support</h3>
      <p>
        Blood donations help hospitals during accidents and emergencies.
      </p>
    </div>

    <div className="why-card">
      <h3>🤝 Build Community</h3>
      <p>
        Donating blood creates a stronger and healthier community.
      </p>
    </div>

  </div>

</section>

</div>  
  );
}

export default Home;
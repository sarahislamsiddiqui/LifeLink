import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <h1>Dashboard</h1>

      <div className="dashboard-cards">

        <div className="dashboard-card">
          <h2>❤️ 1500</h2>
          <p>Total Donors</p>
        </div>

        <div className="dashboard-card">
          <h2>🩸 320</h2>
          <p>Blood Requests</p>
        </div>

        <div className="dashboard-card">
          <h2>✅ 275</h2>
          <p>Fulfilled Requests</p>
        </div>

        <div className="dashboard-card">
          <h2>🏥 45</h2>
          <p>Partner Hospitals</p>
        </div>

      </div>

      <section className="recent-requests">

        <h2>Recent Blood Requests</h2>

        <div className="request-item">
          <p><strong>Patient:</strong> Aman Gupta</p>
          <p><strong>Blood Group:</strong> O+</p>
          <p><strong>Hospital:</strong> City Hospital</p>
          <p><strong>Status:</strong> 🔴 Emergency</p>
        </div>

        <div className="request-item">
          <p><strong>Patient:</strong> Sara Khan</p>
          <p><strong>Blood Group:</strong> A-</p>
          <p><strong>Hospital:</strong> Sunrise Hospital</p>
          <p><strong>Status:</strong> 🟢 Fulfilled</p>
        </div>

        <div className="request-item">
          <p><strong>Patient:</strong> Rahul Sharma</p>
          <p><strong>Blood Group:</strong> B+</p>
          <p><strong>Hospital:</strong> Apollo Hospital</p>
          <p><strong>Status:</strong> 🟡 Pending</p>
        </div>

      </section>
      <section className="progress-section">

  <h2>Portal Statistics</h2>

  <div className="progress-item">

    <p>Requests Fulfilled (86%)</p>

    <div className="progress-bar">

      <div
        className="progress-fill"
        style={{ width: "86%" }}
      ></div>

    </div>

  </div>

  <div className="progress-item">

    <p>Active Donors (72%)</p>

    <div className="progress-bar">

      <div
        className="progress-fill"
        style={{ width: "72%" }}
      ></div>

    </div>

  </div>

  <div className="progress-item">

    <p>Hospital Network (91%)</p>

    <div className="progress-bar">

      <div
        className="progress-fill"
        style={{ width: "91%" }}
      ></div>

    </div>

  </div>

</section>
<section className="progress-section">

  <h2>Blood Group Distribution</h2>

  <div className="progress-item">
    <p>O+ (35%)</p>
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: "35%" }}></div>
    </div>
  </div>

  <div className="progress-item">
    <p>A+ (22%)</p>
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: "22%" }}></div>
    </div>
  </div>

  <div className="progress-item">
    <p>B+ (18%)</p>
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: "18%" }}></div>
    </div>
  </div>

  <div className="progress-item">
    <p>AB+ (10%)</p>
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: "10%" }}></div>
    </div>
  </div>

</section>

    </div>
  );
}

export default Dashboard;
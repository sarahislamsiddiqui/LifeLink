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

    </div>
  );
}

export default Dashboard;
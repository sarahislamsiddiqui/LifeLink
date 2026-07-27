import { useState, useEffect } from "react";
import { getDonors, getRequests } from "../services/api";
import "../styles/dashboard.css";

function Dashboard() {
  const [totalDonors, setTotalDonors] = useState(0);
  const [totalRequests, setTotalRequests] = useState(0);
  const [recentRequests, setRecentRequests] = useState([]);

  useEffect(() => {
    getDonors().then((res) => {
      setTotalDonors(res.data.length);
    });

    getRequests().then((res) => {
      setTotalRequests(res.data.length);
      // Show the most recent 3 requests (last added first)
      setRecentRequests(res.data.slice(-3).reverse());
    });
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h2>❤️ {totalDonors}</h2>
          <p>Total Donors</p>
        </div>

        <div className="dashboard-card">
          <h2>🩸 {totalRequests}</h2>
          <p>Blood Requests</p>
        </div>
      </div>

      <section className="recent-requests">
        <h2>Recent Blood Requests</h2>

        {recentRequests.length > 0 ? (
          recentRequests.map((req, index) => (
            <div className="request-item" key={index}>
              <p><strong>Patient:</strong> {req.patientName}</p>
              <p><strong>Blood Group:</strong> {req.bloodGroup}</p>
              <p><strong>Hospital:</strong> {req.hospital}</p>
              <p><strong>Status:</strong> {req.status}</p>
            </div>
          ))
        ) : (
          <p>No requests yet.</p>
        )}
      </section>
    </div>
  );
}

export default Dashboard;
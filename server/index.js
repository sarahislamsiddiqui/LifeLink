const express = require("express");
const cors = require("cors");
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const serviceAccount = require("./lifelink-c9a04-firebase-adminsdk-fbsvc-4f354e22af.json");

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("LifeLink backend running");
});

// Test API
app.get("/api/test", (req, res) => {
  res.json({
    message: "API is working",
  });
});

// ================= DONORS =================

// Create donor
app.post("/api/donors", async (req, res) => {
  try {
    const donor = req.body;

    const docRef = await db.collection("donors").add(donor);

    res.status(201).json({
      message: "Donor added successfully",
      id: docRef.id,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Get donors
app.get("/api/donors", async (req, res) => {
  try {
    const snapshot = await db.collection("donors").get();

    const donors = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.json(donors);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Update donor
app.put("/api/donors/:id", async (req, res) => {
  try {
    await db.collection("donors").doc(req.params.id).update(req.body);

    res.json({
      message: "Donor updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Delete donor
app.delete("/api/donors/:id", async (req, res) => {
  try {
    await db.collection("donors").doc(req.params.id).delete();

    res.json({
      message: "Donor deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// ================= BLOOD REQUESTS =================

// Create blood request
app.post("/api/requests", async (req, res) => {
  try {
    const request = req.body;

    const docRef = await db.collection("requests").add(request);

    res.status(201).json({
      message: "Blood request created successfully",
      id: docRef.id,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Get blood requests
app.get("/api/requests", async (req, res) => {
  try {
    const snapshot = await db.collection("requests").get();

    const requests = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.json(requests);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Update blood request
app.put("/api/requests/:id", async (req, res) => {
  try {
    await db.collection("requests").doc(req.params.id).update(req.body);

    res.json({
      message: "Blood request updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Delete blood request
app.delete("/api/requests/:id", async (req, res) => {
  try {
    await db.collection("requests").doc(req.params.id).delete();

    res.json({
      message: "Blood request deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Render provides the port through an environment variable
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
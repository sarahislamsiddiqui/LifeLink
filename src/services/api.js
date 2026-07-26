import axios from "axios";

const API_URL = "http://localhost:5000/api";

// Donors
export const getDonors = () => axios.get(`${API_URL}/donors`);
export const addDonor = (data) => axios.post(`${API_URL}/donors`, data);

// Requests
export const getRequests = () => axios.get(`${API_URL}/requests`);
export const addRequest = (data) => axios.post(`${API_URL}/requests`, data);

// Hospitals
export const getHospitals = () => axios.get(`${API_URL}/hospitals`);
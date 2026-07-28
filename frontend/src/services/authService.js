import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// Login User
export const loginUser = async (data) => {
  
      console.log(data);;
  return await axios.post(
    `${API_URL}/login`,
    data
  );
};

// Register User
export const registerUser = async (data) => {
  return await axios.post(
    `${API_URL}/register`,
    data
  );
};
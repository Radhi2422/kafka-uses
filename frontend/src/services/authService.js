import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;

// Login User
export const loginUser = async (data) => {
  // return ({
  //     success: true,
  //     message: "Login successful",
  //     token: '1234',
  //     employeeId: 'EMP01',
  //     employee: {
  //     employeeId: 'EMP01',
  //     date: 'EMP01',
  //     email: 'EMP01',
  //     stick: 'EMP01',
  //     },
  //   });
  // console.log("data",VITE_API_URL);
  return await axios.post(
    `${VITE_API_URL}/login`,
    data
  );
};

// Register User
export const registerUser = async (data) => {
  return await axios.post(
    `${VITE_API_URL}/register`,
    data
  );
};
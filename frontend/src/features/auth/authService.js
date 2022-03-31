import axios from "axios";

const API_URL = "/api/users/";

export const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//logout
const logout = () => {
    localStorage.removeItem('user')
  }

const authService = {
  register,logout
};

export default authService;

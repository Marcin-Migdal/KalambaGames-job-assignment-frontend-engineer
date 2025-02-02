import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

const setAuthToken = (token: string) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const deleteAuthToken = () => {
  delete api.defaults.headers.common["Authorization"];
};

export default api;
export { deleteAuthToken, setAuthToken };

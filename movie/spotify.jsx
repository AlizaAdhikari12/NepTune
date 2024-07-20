import axios from "axios";

const Client_ID = "a33b2d4467fe4e2e9e5aa89331166024";
const URLS = "http://localhost:5173";
const authEndpoints = "https://accounts.spotify.com/authorize?";
const scopes = ["user-library-read", "playlist-read-private"];

export const LoginEndpoint = `${authEndpoints}client_id=${Client_ID}&redirect_uri=${URLS}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});
export const setClientToken = (token) => {
  console.log('Setting token in Axios:', token);
  apiClient.interceptors.request.use(
    async (config) => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
  );
};

export default apiClient;

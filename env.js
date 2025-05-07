export const API_BASE_URL =
  import.meta.env.MODE === "localhost"
    ? "http://localhost:3000"
    : "https://juusohuugithubio-production-d7ac.up.railway.app";

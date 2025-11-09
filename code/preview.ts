import { fetchData } from "./utils";

interface User {
  name: string;
  id?: number;
}

const API_URL = "https://api.example.com";

export function getUser(id: string): User {
  const data = fetchData(`${API_URL}/users/${id}`);
  return data ?? { name: "Guest" };
}

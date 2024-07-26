import { errorAlert } from "../helpers/alert";
import { Company } from "../types/companie";

export async function login(username: string, password: string): Promise<{ access_token: string }> {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      errorAlert(errorResponse.message);
      throw new Error("Login failed");
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
}

export async function getAllCompanies(): Promise<Company[]> {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/companies`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
    if (!response.ok) {
      throw new Error("Get companies failed");
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
}

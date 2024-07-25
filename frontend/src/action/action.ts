export async function login(username: string, password: string) {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  if (!response.ok) {
    throw new Error("Login failed");
  }
  return await response.json();
}

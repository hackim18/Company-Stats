import { useState, useEffect } from "react";

export default function LoginAndLogoutButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const logout = async () => {
    localStorage.removeItem("access_token");
    window.location.href = "/login";
    setIsLoggedIn(false);
  };
  const login = async () => {
    window.location.href = "/login";
  };

  return (
    <button onClick={isLoggedIn ? logout : login} type="submit" className={`btn btn-outline ${isLoggedIn ? "btn-error" : "btn-info"}`}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d={
            isLoggedIn
              ? "M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
              : "M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
          }
        />
      </svg>
      {isLoggedIn ? "Logout" : "Login"}
    </button>
  );
}

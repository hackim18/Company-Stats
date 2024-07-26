import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../action/action";
import { ToastContainer } from "react-toastify";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = await login(username, password);
    localStorage.setItem("access_token", data.access_token);
    navigate("/");
  };

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-8">
            <h2 className="text-3xl font-bold text-center text-gray-700">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mt-4">
                <label className="block text-sm text-gray-600">Username</label>
                <input
                  type="text"
                  placeholder="Example: admin"
                  className="input input-bordered w-full mt-2"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm text-gray-600">Password</label>
                <input
                  type="password"
                  placeholder="Example: admin#1234"
                  className="input input-bordered w-full mt-2"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mt-6">
                <button className="btn btn-primary w-full" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="px-6 py-4 bg-gray-100 border-t text-center">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

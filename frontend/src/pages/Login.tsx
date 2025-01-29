import React from "react";

const Login: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-screen">
    <h2 className="text-2xl font-bold">Login</h2>
    <input className="border p-2 mt-4" type="text" placeholder="Email" />
    <input className="border p-2 mt-2" type="password" placeholder="Password" />
    <button className="bg-blue-500 text-white p-2 mt-4 rounded">Login</button>
  </div>
);

export default Login;

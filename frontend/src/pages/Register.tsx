import React from "react";

const Register: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-screen">
    <h2 className="text-2xl font-bold">Register</h2>
    <input className="border p-2 mt-4" type="text" placeholder="Username" />
    <input className="border p-2 mt-2" type="text" placeholder="Email" />
    <input className="border p-2 mt-2" type="password" placeholder="Password" />
    <button className="bg-green-500 text-white p-2 mt-4 rounded">Register</button>
  </div>
);

export default Register;

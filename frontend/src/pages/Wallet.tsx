import React from "react";

const Wallet: React.FC = () => {
  const walletBalance = 100;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold">Wallet Details</h2>
      <p className="text-lg mt-4">Your balance: <strong>${walletBalance}</strong></p>
    </div>
  );
};

export default Wallet;

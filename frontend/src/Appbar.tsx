import { useAccount, useConnect, useDisconnect } from "wagmi";
import { useState } from "react";

export function Appbar() {
  const { address } = useAccount();
  return (
    <nav className="">
      <div className="left">
        <Logo />
      </div>
      <div className="right">
        <WalletDropdown address={address} />
      </div>
    </nav>
  );
}

function Logo() {
  return <div className="logo-text">PayFair</div>;
}

function WalletDropdown({ address }: { address?: string }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  return (
    <div className="relative">
      <button className="px-4 py-2 border rounded-md" onClick={toggleDropdown}>
        {address ? "Wallet" : "Connect Wallet"}
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="wallet-buttons">
          {!address ? <Connectors /> : <DisconnectButton />}
        </div>
      )}
    </div>
  );
}

// Wallet Connector Component
function Connectors() {
  const { connectors, connect } = useConnect();
  const filteredConnectors = connectors.filter(
    (connector) => connector.name !== "Injected"
  );

  return filteredConnectors.map((connector) => (
    <button
      key={connector.uid}
      className="wallets-select"
      onClick={() => connect({ connector })}
    >
      {connector.name}
    </button>
  ));
}

// Disconnect Button Component
function DisconnectButton() {
  const { disconnect } = useDisconnect();

  return (
    <button
      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
      onClick={() => disconnect()}
    >
      Disconnect
    </button>
  );
}

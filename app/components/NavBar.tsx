"use client";
import { useAuth } from "../providers/WalletConnectProvider";

export function NavBar() {
    const {isLoggedIn, login, logout, address} = useAuth()

    const handleLogin = async () => {
        try {
            await login()
        } catch (error) {
            console.error("LOGIN ERROR", error);
        }
    }

    const truncateAddress = (addr: string | null) => {
        const start = addr?.slice(0, 6); // First 6 characters
        const end = addr?.slice(-4);     // Last 4 characters
        return `${start}...${end}`;
      };

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">Greetings dApp</a>
            </div>
            <div className="navbar-end">
                {isLoggedIn ? (
                    <div className="flex flex-row">
                    <a className="btn" onClick={logout}>Logout</a>
                    <a className="btn disabled">{truncateAddress(address)}</a>
                    </div>
                ) : (
                    <a className="btn" onClick={handleLogin}>Login</a>
                )}
            </div>
        </div>
    );
}
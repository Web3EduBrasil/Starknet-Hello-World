"use client";
import { useAuth } from "./providers/WalletConnectProvider";

export default function Home() {
  const { isLoggedIn, login } = useAuth();

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Fetched Greeting</span>
              </label>
              <input type="text" placeholder="email" className="input input-bordered" required={isLoggedIn} disabled={!isLoggedIn} /> {/* here will be displayed the fetched greeting */}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Update Greeting</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" required={isLoggedIn} disabled={!isLoggedIn} />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Update Greeting</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" onClick={isLoggedIn ? undefined : login}>{isLoggedIn ? "Connect Wallet" : "Login"}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

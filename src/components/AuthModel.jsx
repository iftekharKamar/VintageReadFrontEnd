import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { X, User } from "lucide-react";
import { login, register } from "../features/authSlice.js";

export default function AuthModal({ isOpen, onClose }) {

  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const { loading } = authState;

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      if (isLogin) {
        const resultAction = await dispatch(login({ email, password }));
        if (login.fulfilled.match(resultAction)) {
          localStorage.setItem("token", resultAction.payload.token);
          localStorage.setItem(
            "user",
            JSON.stringify(resultAction.payload.user)
          );
          onClose(); // close modal on success
        } else {
          setError(resultAction.payload || "Login failed");
        }
      } else {
        const resultAction = await dispatch(
          register({ fullName, email, password })
        );
        if (register.fulfilled.match(resultAction)) {
          altert("Registration successful! You can now log in.");
          onClose();
        } else {
          setError(resultAction.payload || "Registration failed");
        }
      }
    } catch (err) {
      setError(err.message || "An unexpected error occurred.");
    }
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setEmail("");
    setPassword("");
    setFullName("");
    setError(null);
  };

  return(
    <>isOpen&& {

    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 backdrop-blur-sm animate-fade-in no-scrollbar">
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10 bg-white rounded-full p-1"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="p-8 text-center">
            <div className="mx-auto bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <User className="h-8 w-8 text-amber-700" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">
              {isLogin ? "Welcome Back" : "Join Vintage Reads"}
            </h2>
            <p className="text-gray-500 mb-6">
              {isLogin
                ? "Sign in to manage your orders."
                : "Create an account to track your collection."}
            </p>

            <form className="space-y-4 text-left" onSubmit={handleSubmit}>
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative text-sm">
                  <span className="block sm:inline">{error}</span>
                </div>
              )}

              {!isLogin && (
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                    placeholder="John Doe"
                    disabled={loading}
                    required
                  />
                </div>
              )}

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  placeholder="you@example.com"
                  disabled={loading}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  placeholder="••••••••"
                  disabled={loading}
                  required
                />
              </div>

              <button
                type="submit"
                className={`w-full text-white py-3 rounded-lg font-bold transition ${
                  loading
                    ? "bg-amber-500 cursor-not-allowed"
                    : "bg-amber-800 hover:bg-amber-900"
                }`}
                disabled={loading}
              >
                {loading
                  ? isLogin
                    ? "Signing In..."
                    : "Creating Account..."
                  : isLogin
                  ? "Sign In"
                  : "Create Account"}
              </button>
            </form>
          </div>

          <div className="bg-gray-50 p-4 text-center text-sm text-gray-600 border-t border-gray-100">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={switchMode}
              className="text-amber-800 font-bold hover:underline"
              disabled={loading}
            >
              {isLogin ? "Sign up" : "Log in"}
            </button>
          </div>
        </div>
      </div>
    </div>
    }    </>
  );
}

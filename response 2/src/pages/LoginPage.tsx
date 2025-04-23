
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import StudentCertificateIllustration from "@/components/StudentCertificateIllustration";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [wallet, setWallet] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});
  const navigate = useNavigate();

  // Connect Wallet Handler
  const handleConnectWallet = async () => {
    if (!(window as any).ethereum) {
      toast.error("Metamask not detected. Please install Metamask to connect your wallet.");
      return;
    }
    setConnecting(true);
    try {
      const accounts = await (window as any).ethereum.request({ method: "eth_requestAccounts" });
      setWallet(accounts[0] || "");
      toast.success("Wallet connected!");
    } catch (err) {
      toast.error("Failed to connect wallet.");
    }
    setConnecting(false);
  };

  // Simple Client Validation
  const validateForm = () => {
    let err: { username?: string; password?: string } = {};
    if (!username) err.username = "Username is required";
    if (!password) err.password = "Password is required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    toast.info("Login not implemented in this demo.");
    // TODO: Integrate real login flow here!
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col md:flex-row items-stretch justify-center"
      style={{
        background:
          "linear-gradient(135deg, #f2fce2 0%, #e5deff 46%, #ffc3a0 100%)",
      }}
    >
      <div className="w-full md:w-1/2 flex items-center justify-center py-10 px-4 md:px-12 bg-white/70 backdrop-blur-xl shadow-2xl animate-fade-in">
        <form onSubmit={handleLogin} className="flex flex-col w-full max-w-md gap-2">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-gray-800">
            Student Login
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Login to access your NFT-based certificates.
          </p>

          {/* Username Input */}
          <div className="mb-2">
            <label htmlFor="username" className="block font-medium text-gray-700 mb-1">
              Username
            </label>
            <Input
              id="username"
              type="text"
              value={username}
              autoComplete="username"
              onChange={e => setUsername(e.target.value)}
              placeholder="Your username"
              className="rounded-xl bg-white shadow ring-1 ring-gray-200 focus:ring-2 focus:ring-primary transition text-base"
              aria-invalid={!!errors.username}
              aria-describedby="username-error"
            />
            {errors.username && (
              <p id="username-error" className="text-xs text-red-500 mt-1">{errors.username}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="mb-2 relative">
            <label htmlFor="password" className="block font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative flex items-center">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                autoComplete="current-password"
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
                className="rounded-xl bg-white shadow ring-1 ring-gray-200 focus:ring-2 focus:ring-primary transition text-base pr-10"
                aria-invalid={!!errors.password}
                aria-describedby="password-error"
              />
              <button
                type="button"
                tabIndex={-1}
                className="absolute right-2 text-gray-400 hover:text-primary focus:outline-none"
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p id="password-error" className="text-xs text-red-500 mt-1">{errors.password}</p>
            )}
          </div>

          {/* Wallet Input & Connect Button */}
          <div className="mb-3">
            <label className="block font-medium text-gray-700 mb-1">
              Wallet Address (optional)
            </label>
            <div className="flex gap-2">
              <Input
                type="text"
                value={wallet}
                onChange={e => setWallet(e.target.value)}
                placeholder="0x..."
                className="rounded-xl bg-white shadow ring-1 ring-gray-200 focus:ring-2 focus:ring-primary transition text-base"
                disabled={connecting}
                autoComplete="off"
              />
              <Button
                type="button"
                variant="secondary"
                className="rounded-xl shadow min-w-[110px]"
                onClick={handleConnectWallet}
                disabled={connecting}
              >
                {connecting ? "Connecting..." : "Connect Wallet"}
              </Button>
            </div>
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            className="rounded-xl shadow font-bold w-full my-2 text-base h-12"
          >
            Login
          </Button>

          {/* Action Links */}
          <div className="flex justify-between items-center mt-1 mb-4 text-sm">
            <button
              type="button"
              className="text-gray-500 hover:text-primary focus:underline transition px-1"
              tabIndex={-1}
              onClick={() => toast.info("Password reset not implemented in demo.")}
            >
              Forgot Password?
            </button>
            <button
              type="button"
              className="text-primary font-semibold hover:underline px-1"
              tabIndex={-1}
              onClick={() => navigate("/")}
            >
              Create New Account
            </button>
          </div>
        </form>
      </div>
      {/* Illustration Section */}
      <div className="hidden md:flex w-1/2 bg-transparent items-center justify-center">
        <StudentCertificateIllustration />
      </div>
    </div>
  );
};

export default LoginPage;

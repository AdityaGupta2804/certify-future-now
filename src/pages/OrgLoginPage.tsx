
import React, { useState } from "react";
import { Eye, EyeOff, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import FloatingLabelInput from "@/components/FloatingLabelInput";
import OrgIllustration from "@/components/OrgIllustration";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const roles = [
  { label: "Issuer", value: "issuer" },
  { label: "Admin", value: "admin" },
];

const OrgLoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<string>("issuer");
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
    } catch {
      toast.error("Failed to connect wallet.");
    }
    setConnecting(false);
  };

  // Simple Validation
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
    toast.info("Organization Login not implemented in this demo.");
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col md:flex-row items-stretch justify-center transition"
      style={{
        background:
          "linear-gradient(135deg, #1A1F2C 0%, #E5DEFF 60%, #86efac 100%)",
      }}
    >
      {/* Sidebar with Illustration (desktop) */}
      <div className="hidden md:flex w-1/2 bg-[#1a1f2c] bg-opacity-90 items-center justify-center">
        <OrgIllustration />
      </div>
      {/* Login Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center py-10 px-4 md:px-16 bg-white/85 backdrop-blur-xl animate-fade-in">
        <form onSubmit={handleLogin} className="flex flex-col w-full max-w-md gap-2">
          <div className="flex items-center gap-3 mb-3 text-navy-800">
            <Building2 className="text-green-500" size={28} />
            <h2 className="text-2xl md:text-3xl font-extrabold">Organization Login</h2>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            Sign in as an organization admin or issuer to manage and issue certificates.
          </p>

          {/* Username */}
          <FloatingLabelInput
            label="Username"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            error={errors.username}
            placeholder="Username"
            autoComplete="username"
          />

          {/* Password */}
          <div className="relative">
            <FloatingLabelInput
              label="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={e => setPassword(e.target.value)}
              error={errors.password}
              placeholder="Password"
              autoComplete="current-password"
              className="pr-12"
            />
            <button
              type="button"
              tabIndex={-1}
              className="absolute right-2 top-7 text-gray-400 hover:text-primary focus:outline-none"
              onClick={() => setShowPassword(s => !s)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
            </button>
          </div>

          {/* Role Dropdown */}
          <div className="mb-6">
            <label className="block font-medium text-gray-700 mb-1">
              Role
            </label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger className="rounded-xl shadow ring-1 ring-gray-200 focus:ring-2 focus:ring-primary bg-white text-base font-medium">
                <SelectValue placeholder="Select Role" />
              </SelectTrigger>
              <SelectContent>
                {roles.map(r => (
                  <SelectItem key={r.value} value={r.value}>{r.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Wallet Address Input and Connect */}
          <div className="mb-4">
            <label className="block font-medium text-gray-700 mb-1">Wallet Address (optional)</label>
            <div className="flex gap-2">
              <FloatingLabelInput
                type="text"
                value={wallet}
                onChange={e => setWallet(e.target.value)}
                placeholder="0x..."
                label="Wallet Address"
                disabled={connecting}
                containerClassName="flex-1"
              />
              <Button
                type="button"
                variant="secondary"
                className="rounded-xl shadow min-w-[120px] flex-shrink-0"
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
            className="rounded-xl shadow font-bold w-full my-2 text-base h-12 bg-[#1a1f2c] hover:bg-[#131623] text-white"
          >
            Login
          </Button>

          {/* Action Links */}
          <div className="flex justify-between items-center mt-2 mb-6 text-sm">
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
              className="text-green-700 font-semibold hover:underline px-1"
              tabIndex={-1}
              onClick={() => navigate("/org-signup")}
            >
              Create Organization Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrgLoginPage;


import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Mail, User, Phone, Wallet, CheckCircle } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  username: string;
  password: string;
  org: string;
  contact: string;
  wallet: string;
  agreed: boolean;
};

const initialState: FormState = {
  name: "",
  email: "",
  username: "",
  password: "",
  org: "",
  contact: "",
  wallet: "",
  agreed: false,
};

const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validateUsername = (username: string) =>
  /^[a-z0-9_]{3,16}$/.test(username);

const validatePhone = (ph: string) =>
  /^(\+?\d{7,17})$/.test(ph);

const validateWallet = (a: string) =>
  /^0x[a-fA-F0-9]{40}$/.test(a);

export function StudentSignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState<FormState>(initialState);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  // Simulated wallet connect
  function handleConnectWallet() {
    // Simulate getting a wallet address
    const fakeAddr = "0x" + Array(40)
      .fill(0)
      .map(() => "abcdef"[Math.floor(Math.random() * 6)])
      .join("");
    setForm(f => ({ ...f, wallet: fakeAddr }));
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) {
    setTouched({ ...touched, [e.target.name]: true });
  }

  const errors = {
    name: form.name.length < 2 && touched.name ? "Please enter your full name." : "",
    email: !validateEmail(form.email) && touched.email ? "Enter a valid email." : "",
    username: (!validateUsername(form.username) && touched.username)
      ? "Lowercase letters/numbers/underscores, 3-16 chars." : "",
    password: form.password.length < 6 && touched.password ? "Password must be at least 6 characters." : "",
    contact: !validatePhone(form.contact) && touched.contact ? "Enter a valid phone number." : "",
    wallet: !!form.wallet && !validateWallet(form.wallet) && touched.wallet ? "Invalid wallet address." : "",
    agreed: !form.agreed && touched.agreed ? "You must agree to terms." : "",
  };

  const isValid =
    form.name &&
    form.email &&
    form.username &&
    validateUsername(form.username) &&
    validateEmail(form.email) &&
    form.password.length >= 6 &&
    (!form.wallet || validateWallet(form.wallet)) &&
    validatePhone(form.contact) &&
    form.agreed;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      username: true,
      password: true,
      org: true,
      contact: true,
      wallet: true,
      agreed: true,
    });
    setErrorMsg("");
    if (!isValid) return;
    setSubmitting(true);
    // Simulate network
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 1200);
  }

  if (success)
    return (
      <div className="flex flex-col items-center gap-4 animate-fade-in">
        <CheckCircle className="text-green-500 w-10 h-10" />
        <h3 className="text-xl font-bold text-brand-blue">Account Created!</h3>
        <p className="text-gray-600">Welcome to CertifyFuture. You can now receive NFT certificates.</p>
      </div>
    );

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto grid gap-5 animate-fade-in"
      autoComplete="off"
    >
      {/* Name */}
      <div className="relative">
        <label
          className={`absolute left-3 top-1 text-sm pointer-events-none transition-all duration-150 ${
            form.name ? "text-brand-indigo -top-4 bg-white px-1" : "text-gray-500 top-3"
          }`}
        >
          <span className="flex items-center gap-1">
            <User className="w-4 h-4" /> Name
          </span>
        </label>
        <Input
          name="name"
          type="text"
          value={form.name}
          onChange={onChange}
          onBlur={handleBlur}
          className="mt-2 bg-white/90 border rounded-lg shadow"
          required
        />
        {errors.name && (
          <div className="text-red-500 text-xs mt-1">{errors.name}</div>
        )}
      </div>
      {/* Email */}
      <div className="relative">
        <label
          className={`absolute left-3 top-1 text-sm pointer-events-none transition-all duration-150 ${
            form.email ? "text-brand-indigo -top-4 bg-white px-1" : "text-gray-500 top-3"
          }`}
        >
          <span className="flex items-center gap-1">
            <Mail className="w-4 h-4" /> Email
          </span>
        </label>
        <Input
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          onBlur={handleBlur}
          className="mt-2 bg-white/90 border rounded-lg shadow"
          required
        />
        {errors.email && (
          <div className="text-red-500 text-xs mt-1">{errors.email}</div>
        )}
      </div>
      {/* Username */}
      <div className="relative">
        <label
          className={`absolute left-3 top-1 text-sm pointer-events-none transition-all duration-150 ${
            form.username ? "text-brand-indigo -top-4 bg-white px-1" : "text-gray-500 top-3"
          }`}
        >
          <span className="flex items-center gap-1">
            <User className="w-4 h-4" /> Username
          </span>
        </label>
        <Input
          name="username"
          type="text"
          value={form.username}
          onChange={e =>
            onChange({
              ...e,
              target: {
                ...e.target,
                value: e.target.value.toLowerCase(),
              },
            })
          }
          onBlur={handleBlur}
          className="mt-2 bg-white/90 border rounded-lg shadow"
          required
        />
        {errors.username && (
          <div className="text-red-500 text-xs mt-1">{errors.username}</div>
        )}
      </div>
      {/* Password */}
      <div className="relative">
        <label
          className={`absolute left-3 top-1 text-sm pointer-events-none transition-all duration-150 ${
            form.password ? "text-brand-indigo -top-4 bg-white px-1" : "text-gray-500 top-3"
          }`}
        >
          Password
        </label>
        <Input
          name="password"
          type={showPassword ? "text" : "password"}
          value={form.password}
          onChange={onChange}
          onBlur={handleBlur}
          className="mt-2 bg-white/90 border rounded-lg shadow pr-10"
          required
        />
        <button
          type="button"
          tabIndex={-1}
          aria-label={showPassword ? "Hide password" : "Show password"}
          className="absolute right-3 top-1.5 text-gray-500"
          onClick={() => setShowPassword((s) => !s)}
        >
          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </button>
        {errors.password && (
          <div className="text-red-500 text-xs mt-1">{errors.password}</div>
        )}
      </div>
      {/* Organization (optional) */}
      <div className="relative">
        <label
          className={`absolute left-3 top-1 text-sm pointer-events-none transition-all duration-150 ${
            form.org ? "text-brand-indigo -top-4 bg-white px-1" : "text-gray-500 top-3"
          }`}
        >
          Organisation (optional)
        </label>
        <Input
          name="org"
          type="text"
          value={form.org}
          onChange={onChange}
          onBlur={handleBlur}
          className="mt-2 bg-white/90 border rounded-lg shadow"
        />
      </div>
      {/* Contact */}
      <div className="relative">
        <label
          className={`absolute left-3 top-1 text-sm pointer-events-none transition-all duration-150 ${
            form.contact ? "text-brand-indigo -top-4 bg-white px-1" : "text-gray-500 top-3"
          }`}
        >
          <span className="flex items-center gap-1">
            <Phone className="w-4 h-4" /> Contact Number
          </span>
        </label>
        <Input
          name="contact"
          type="tel"
          value={form.contact}
          onChange={onChange}
          onBlur={handleBlur}
          className="mt-2 bg-white/90 border rounded-lg shadow"
          required
        />
        {errors.contact && (
          <div className="text-red-500 text-xs mt-1">{errors.contact}</div>
        )}
      </div>
      {/* Wallet Address */}
      <div className="relative">
        <label
          className={`absolute left-3 top-1 text-sm pointer-events-none transition-all duration-150 ${
            form.wallet ? "text-brand-indigo -top-4 bg-white px-1" : "text-gray-500 top-3"
          }`}
        >
          <span className="flex items-center gap-1">
            <Wallet className="w-4 h-4" /> Wallet Address
          </span>
        </label>
        <div className="flex mt-2 gap-2">
          <Input
            name="wallet"
            type="text"
            value={form.wallet}
            onChange={onChange}
            onBlur={handleBlur}
            className="bg-white/90 border rounded-lg shadow flex-1"
            placeholder="0x..."
          />
          <Button
            type="button"
            variant="secondary"
            className="shrink-0"
            onClick={handleConnectWallet}
          >
            {form.wallet ? "Connected" : "Connect Wallet"}
          </Button>
        </div>
        {errors.wallet && (
          <div className="text-red-500 text-xs mt-1">{errors.wallet}</div>
        )}
      </div>
      {/* Terms Checkbox */}
      <div className="flex items-center gap-3 mt-2">
        <Checkbox
          id="agree"
          name="agreed"
          checked={form.agreed}
          onCheckedChange={(c) =>
            onChange({
              target: {
                name: "agreed",
                type: "checkbox",
                checked: !!c,
                value: "",
              },
            } as any)
          }
          onBlur={(e: any) => handleBlur({ ...e, target: { ...e.target, name: "agreed" } })}
          required
        />
        <label htmlFor="agree" className="text-gray-700 text-sm select-none">
          I agree to CertifyFuture's{" "}
          <a href="/terms" className="text-brand-indigo underline hover:opacity-80">Terms</a> and{" "}
          <a href="/privacy" className="text-brand-indigo underline hover:opacity-80">Privacy Policy</a>.
        </label>
      </div>
      {errors.agreed && (
        <div className="text-red-500 text-xs mt-1">{errors.agreed}</div>
      )}
      {/* Submit */}
      <Button
        className="w-full mt-2 bg-brand-indigo hover:bg-brand-blue text-white rounded-lg font-semibold text-lg py-2 transition-all duration-200 shadow-lg"
        type="submit"
        disabled={submitting || !isValid}
      >
        {submitting ? "Creating Account..." : "Create Account"}
      </Button>
      {errorMsg && (
        <div className="text-red-500 text-center text-sm">{errorMsg}</div>
      )}
    </form>
  );
}

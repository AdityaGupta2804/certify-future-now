
import React from "react";
import { useForm, Controller } from "react-hook-form";
import FloatingLabelInput from "./FloatingLabelInput";
import { Eye, EyeClosed, Mail, Building, User, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ORGANISATIONS = [
  "Microsoft",
  "Google",
  "Uni of Blockchain",
  "CertifyFuture",
  "Other"
];

const ROLES = ["Issuer", "Admin"];

type FormValues = {
  name: string;
  email: string;
  username: string;
  password: string;
  organisation: string;
  orgName?: string;
  orgLogo?: FileList;
  orgDomain?: string;
  orgRegistration?: string;
  role: string;
  contact: string;
  wallet: string;
  agree: boolean;
};

const lowercasePattern = /^[a-z0-9_]+$/;

const SignUpForm: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [walletConnected, setWalletConnected] = React.useState(false);
  const [walletAddress, setWalletAddress] = React.useState<string>("");
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    mode: "onBlur",
    defaultValues: {
      organisation: "",
      role: "",
      agree: false
    }
  });

  const selectedOrg = watch("organisation");

  // Dummy unique username check (simulate async)
  const validateUsername = async (input: string) => {
    await new Promise(res => setTimeout(res, 300));
    if (!lowercasePattern.test(input)) return "Lowercase, no spaces";
    if (input.length < 3) return "At least 3 characters";
    // Pretend to call API
    if (input === "takenname") return "This username is already taken";
    return true;
  };

  // Dummy connect wallet
  const handleConnectWallet = () => {
    setTimeout(() => {
      setWalletConnected(true);
      setWalletAddress("0xABCD...1234");
      setValue("wallet", "0xABCD...1234");
      toast({ title: "Wallet connected", description: "Wallet address autofilled." });
    }, 600);
  };

  const onSubmit = (data: FormValues) => {
    toast({ title: "Sign Up Successful", description: "Your organization sign-up is submitted!" });
    // Place submission logic here
  };

  return (
    <form className="w-full max-w-md mx-auto mt-3 space-y-2 mb-2" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <FloatingLabelInput
        label="Your Name"
        placeholder=" "
        {...register("name", { required: "Required" })}
        error={errors.name?.message}
        icon={<User size={20} />}
      />
      <FloatingLabelInput
        label="Email"
        placeholder=" "
        type="email"
        {...register("email", {
          required: "Required",
          pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
        })}
        error={errors.email?.message}
        icon={<Mail size={20} />}
      />
      <FloatingLabelInput
        label="Unique Username"
        placeholder=" "
        {...register("username", { required: "Required", validate: validateUsername })}
        error={errors.username?.message}
        icon={<User size={20} />}
      />
      <div className="relative">
        <FloatingLabelInput
          label="Password"
          placeholder=" "
          type={showPassword ? "text" : "password"}
          {...register("password", {
            required: "Required",
            minLength: { value: 6, message: "Minimum 6 chars" }
          })}
          error={errors.password?.message}
          icon={showPassword ? <EyeClosed size={20} className="cursor-pointer" onClick={() => setShowPassword(false)} /> : <Eye size={20} className="cursor-pointer" onClick={() => setShowPassword(true)} />}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="organisation" className="block text-gray-500 text-xs font-semibold mb-1 px-2">Organisation</label>
        <Controller
          control={control}
          name="organisation"
          rules={{ required: "Select an organisation" }}
          render={({ field }) => (
            <select
              {...field}
              id="organisation"
              className={cn(
                "block w-full rounded-xl p-3 pr-10 pl-3 mt-0 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-primary focus:outline-none transition appearance-none",
                errors.organisation && "!ring-red-400"
              )}
              aria-invalid={!!errors.organisation}
            >
              <option value="">Select an organisation</option>
              {ORGANISATIONS.map(opt =>
                <option key={opt} value={opt}>{opt}</option>
              )}
            </select>
          )}
        />
        {errors.organisation && <div className="mt-1 ml-2 text-xs text-red-500 animate-fade-in">{errors.organisation.message}</div>}
      </div>

      {selectedOrg === "Other" && (
        <div className="space-y-4 animate-fade-in">
          <FloatingLabelInput
            label="Organisation Name"
            placeholder=" "
            {...register("orgName", { required: "Required" })}
            error={errors.orgName?.message}
            icon={<Building size={20} />}
          />
          <div className="mb-6">
            <label className="block text-xs text-gray-400 mb-1 px-2">Logo (optional)</label>
            <input
              type="file"
              {...register("orgLogo")}
              accept="image/*"
              className="block w-full rounded-xl border p-3 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-primary outline-none"
            />
          </div>
          <FloatingLabelInput
            label="Domain"
            placeholder=" "
            {...register("orgDomain", { required: "Required" })}
            error={errors.orgDomain?.message}
            icon={<Building size={20} />}
          />
          <FloatingLabelInput
            label="Registration Number"
            placeholder=" "
            {...register("orgRegistration", { required: "Required" })}
            error={errors.orgRegistration?.message}
            icon={<Building size={20} />}
          />
        </div>
      )}

      <div className="mb-6">
        <label htmlFor="role" className="block text-gray-500 text-xs font-semibold mb-1 px-2">Role</label>
        <Controller
          control={control}
          name="role"
          rules={{ required: "Select a role" }}
          render={({ field }) => (
            <select
              {...field}
              id="role"
              className={cn(
                "block w-full rounded-xl p-3 pr-10 pl-3 mt-0 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-primary focus:outline-none transition appearance-none",
                errors.role && "!ring-red-400"
              )}
              aria-invalid={!!errors.role}
            >
              <option value="">Select role</option>
              {ROLES.map(opt =>
                <option key={opt} value={opt}>{opt}</option>
              )}
            </select>
          )}
        />
        {errors.role && <div className="mt-1 ml-2 text-xs text-red-500 animate-fade-in">{errors.role.message}</div>}
      </div>

      <FloatingLabelInput
        label="Contact Number"
        placeholder=" "
        type="tel"
        {...register("contact", {
          required: "Required",
          minLength: { value: 8, message: "Too short" }
        })}
        error={errors.contact?.message}
        icon={<Mail size={20} />}
      />

      <div className="flex items-center gap-2 mb-3">
        <div className="flex-1">
          <FloatingLabelInput
            label="Wallet Address"
            placeholder=" "
            {...register("wallet", { required: "Required" })}
            error={errors.wallet?.message}
            icon={<Wallet size={20} />}
            className="pr-2"
          />
        </div>
        <Button
          type="button"
          variant="outline"
          className="rounded-xl shadow-xs px-3 py-2"
          onClick={handleConnectWallet}
        >
          {walletConnected ? "Connected" : "Connect Wallet"}
        </Button>
      </div>

      <div className="flex items-start mb-3">
        <input
          type="checkbox"
          id="agree"
          {...register("agree", { required: "You must agree to continue." })}
          className="mt-1 checked:bg-primary accent-primary rounded cursor-pointer scale-110 transition ring-1 ring-gray-300"
        />
        <label htmlFor="agree" className="ml-2 text-sm text-gray-600 select-none">
          I agree to <span className="underline text-primary cursor-pointer">CertifyFuture’s Terms and Privacy Policy</span>
        </label>
      </div>
      {errors.agree && (
        <div className="mb-3 ml-1 text-xs text-red-500 animate-fade-in">{errors.agree.message}</div>
      )}

      <Button
        className="w-full rounded-xl bg-primary text-white shadow-md py-4 font-semibold text-base hover:scale-105 transition-all duration-150"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Sign Up"}
      </Button>
    </form>
  );
};

export default SignUpForm;

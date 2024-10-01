import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!name || !email || !password){
    setError("Por favor, preencha todos os campos.")
    return;
    }

    console.log("Form Submitted:", { name, email, password, rememberMe });

    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-black">
       {error && <div className="text-red-500">{error}</div>}
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          placeholder="Your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-6 rounded-2xl"
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-6 rounded-2xl"
        />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-6 rounded-2xl"
        />
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="rememberMe"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          className="toggle-checkbox hidden"
        />
        <label
          htmlFor="rememberMe"
          className={`toggle-label w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
            rememberMe ? "bg-teal-400" : "bg-gray-300"
          }`}
        >
          <div
            className={`toggle-circle bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
              rememberMe ? "translate-x-6" : ""
            }`}
          ></div>
        </label>
        <span className="ml-3 text-gray-800">Remember me</span>
      </div>
      <Button type="submit" className="w-full p-6 rounded-2xl bg-teal-300">
        Sign
      </Button>
      <div className="mt-4 text-center">
        <span className="text-gray-800">Already have an account? </span>
        <a
          href="/Login"
          className="text-teal-500 hover:text-teal-700 font-semibold"
        >
          Sign In
        </a>
      </div>
    </form>
  );
};

export default LoginForm;

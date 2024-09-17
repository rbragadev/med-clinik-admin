// pages/login.tsx
"use client";

import LoginSocialButtons from "@/components/SocialButtons";
import LoginForm from "@/components/LoginForm";
import { Typography } from "@/components/ui/typography";
import { Divider } from "@/components/ui/divider";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <Typography component="h1" className="text-2xl font-bold text-center">
          Login
        </Typography>

        <LoginSocialButtons />

        <Divider text="Ou" />

        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;

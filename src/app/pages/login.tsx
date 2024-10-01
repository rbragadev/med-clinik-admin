"use client";

import LoginSocialButtons from "@/components/SocialButtons";
import LoginForm from "@/components/LoginForm";
import { Typography } from "@/components/ui/typography";
import BackgroundHeader from "@/components/ui/BackgroundHeader";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
      <BackgroundHeader>
        <Typography
          component="h1"
          className="text-4xl font-bold text-center pb-6"
        >
          Welcome!
        </Typography>
        <Typography component="h1" className="text-4 text-center pb-20">
          Use these awesome forms to login or create new account in your project
          for free.
        </Typography>

      </BackgroundHeader>

      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
      <Typography
          component="h1"
          className="text-2xl font-bold text-center text-black"
        >
          Register with
        </Typography>
        <LoginSocialButtons />
        <div className="flex items-center justify-center">
          <span className="mx-2 text-gray-400 font-bold">Or</span>
        </div>
        <LoginForm />

   
      </div>
    </div>
  );
};

export default LoginPage;

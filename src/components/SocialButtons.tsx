import { Button } from "@/components/ui/button";
import { FaFacebook, FaApple, FaGoogle } from "react-icons/fa";

const LoginSocialButtons = () => {
  return (
    <div className="flex flex-row w-full space-x-4 items-center justify-center">
      <Button
        variant="outline"
        className="items-center justify-center text-black w-20 h-20"
      >
        <FaFacebook className="text-4xl" />
      </Button>
      <Button
        variant="outline"
        className="items-center justify-center text-black w-20 h-20"
      >
        <FaApple className="text-4xl" />
      </Button>
      <Button
        variant="outline"
        className="items-center justify-center text-black w-20 h-20"
      >
        <FaGoogle className="text-3xl" />
      </Button>
    </div>
  );
};

export default LoginSocialButtons;

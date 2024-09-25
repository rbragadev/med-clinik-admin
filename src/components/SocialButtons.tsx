import { Button } from "@/components/ui/button";
import { FaFacebook, FaApple, FaGoogle } from "react-icons/fa";

const LoginSocialButtons = () => {
  return (
    <div className="flex flex-row w-full space-x-2">
      <Button variant="outline" className="items-center justify-center text-black w-16 h-16">
        <FaFacebook className="mr-2 text-3xl" />
      
      </Button>
      <Button variant="outline" className="items-center justify-center text-black w-16 h-16">
        <FaApple className="mr-2 text-3xl" /> 
    
      </Button>
      <Button variant="outline" className="items-center justify-center text-black w-16 h-16">
        <FaGoogle className="mr-2 text-3xl" /> 
      
      </Button>
    </div>
  );
};

export default LoginSocialButtons;

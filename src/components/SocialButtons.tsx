
import { Button } from './ui/button';
import { FaFacebook, FaApple, FaGoogle } from 'react-icons/fa';

const Buttons = () => {
  return (
    <div className="flex flex-col w-full space-y-2">
      <Button variant="outlined" className="flex items-center justify-center">
        <FaFacebook className="mr-2" /> Login com Facebook
      </Button>
      <Button variant="outlined" className="flex items-center justify-center">
        <FaApple className="mr-2" /> Login com Apple
      </Button>
      <Button variant="outlined" className="flex items-center justify-center">
        <FaGoogle className="mr-2" /> Login com Google
      </Button>
    </div>
  );
};

export default Buttons;

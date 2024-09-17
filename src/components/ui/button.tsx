import { Button as MuiButton, ButtonProps } from '@mui/material';
import { cn } from '@/lib/utils'; // Utilize a função de utilitário `cn` para combinar classes

const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <MuiButton className={cn('w-full', className)} {...props} />
  );
};

export { Button };

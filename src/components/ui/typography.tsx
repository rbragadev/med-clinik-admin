
import { Typography as MuiTypography, TypographyProps } from '@mui/material';


const Typography = ({ className, ...props }: TypographyProps) => {
  return <MuiTypography className={className} {...props} />;
};

export { Typography };

import React from 'react';
import { FormControl, FormLabel, FormLabelProps } from '@mui/material';

// Definindo as props que o componente Label aceitará
interface LabelProps extends FormLabelProps {
  // Você pode adicionar props adicionais aqui se necessário
}

// Componente Label que envolve o FormLabel com FormControl
const Label: React.FC<LabelProps> = ({ children, ...props }) => {
  return (
    <FormControl fullWidth>
      <FormLabel {...props}>{children}</FormLabel>
    </FormControl>
  );
};

export { Label };

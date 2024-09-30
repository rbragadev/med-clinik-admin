// Exemplo de BackgroundHeader
import React, { ReactNode } from 'react';

interface BackgroundHeaderProps {
  children?: ReactNode; // Permite a passagem de filhos
}

const BackgroundHeader: React.FC<BackgroundHeaderProps> = ({ children }) => {
  return (
    <div className="relative w-full h-96 rounded-3xl m-4 p-4">
      {/* O fundo com efeito de ondas */}
      <div className="absolute inset-0 w-full h-full" style={{
        backgroundImage: `url('https://img.freepik.com/fotos-premium/fundo-de-ondas-de-movimento-ciano-e-branco_969965-7184.jpg')`, 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}></div>

      {/* Renderiza os filhos, se houver */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {children}
      </div>
    </div>
  );
};

export default BackgroundHeader;

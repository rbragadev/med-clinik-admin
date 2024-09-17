import { Divider as MuiDivider, DividerProps } from '@mui/material';

const Divider = ({ text, ...props }: DividerProps & { text?: string }) => {
  return (
    <div className="flex items-center my-4">
      <MuiDivider {...props} />
      {text && <span className="mx-2">{text}</span>}
      <MuiDivider {...props} />
    </div>
  );
};

export { Divider };

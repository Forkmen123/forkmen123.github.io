import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

const Button = ({children, onClick}: Props) => {
  return <div className="btn btn-primary"  onClick={onClick} >{children}</div>;
}

export default Button;
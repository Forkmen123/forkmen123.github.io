import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: 'primary' | 'secondary';
}

const Button = ({children, color='primary'}: Props) => {
  return (
    <div
      className={"btn btn-" + color}
      style={{
        borderRadius: "100px",
        fontSize: "1rem",
        boxShadow: "0 0 30px 0 rgba(0,0,0,0.1)",
        fontWeight:'bolder'
      }}
    >
      <p style={{margin:"5px 10px"}}>{children}</p>
    </div>
  );
} 

export default Button;
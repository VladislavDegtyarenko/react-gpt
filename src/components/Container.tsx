import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={["container max-w-xl", className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
};

export default Container;

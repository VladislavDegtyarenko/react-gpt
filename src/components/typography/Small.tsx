import { ReactNode } from "react";

const Small = ({ children }: { children: ReactNode }) => {
  return <small className="text-sm font-medium leading-none">{children}</small>;
};

export default Small;

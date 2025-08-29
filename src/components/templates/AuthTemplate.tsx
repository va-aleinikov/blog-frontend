import { ReactNode } from "react";

type AuthTemplateProps = {
  children: ReactNode;
};

const AuthTemplate = ({ children }: AuthTemplateProps) => {
  return <div>{children}</div>;
};

export default AuthTemplate;

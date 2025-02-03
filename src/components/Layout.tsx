import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <main className="flex-grow container mx-auto  ">{children}</main>;
};

export default Layout;

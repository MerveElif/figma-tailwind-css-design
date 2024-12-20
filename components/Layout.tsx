import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="container mx-auto px-4 lg:px-44">{children}</div>;
};

export default Layout;

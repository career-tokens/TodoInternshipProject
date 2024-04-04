import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex justify-center items-center bg-[#845afc] text-lg">
      {children}
    </div>
  );
};

export default Layout;

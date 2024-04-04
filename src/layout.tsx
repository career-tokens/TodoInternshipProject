import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex justify-center items-center bg-[#845afc] text-lg">
      {children}
    </div>
  );
};

export default Layout;

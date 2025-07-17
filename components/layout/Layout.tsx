import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Header will go here */}
      <main>{children}</main>
      {/* Footer will go here */}
    </div>
  );
};

export default Layout;
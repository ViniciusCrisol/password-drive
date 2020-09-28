import Link from 'next/link';
import React from 'react';

import { Header } from './styles';

const Layout: React.FC = ({ children }) => (
  <>
    <Header>
      <main>
        <Link href="/dashboard">
          <h1>Keep it safe.</h1>
        </Link>
      </main>
    </Header>

    {children}
  </>
);

export default Layout;

import React from 'react';

import { UserProvider } from './useUser';

const AppProvider: React.FC = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default AppProvider;

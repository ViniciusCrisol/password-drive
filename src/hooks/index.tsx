import React from 'react';

import { UserProvider } from './useAuth';

const AppProvider: React.FC = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default AppProvider;

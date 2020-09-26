import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface UserContextData {
  user?: UserType;
  signOut(): void;
  signIn(data: SignData): Promise<void>;
}

interface UserType {
  name: string;
  token: string;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

const UserProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<UserType | null>(null);
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/dashboard');
  }, []);

  const signIn = useCallback(async ({ code, password }: SignData) => {
    const response = await axios.post('/api/login', { code, password });
    const { token, name } = response.data;

    axios.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, name });
  }, []);

  const signOut = useCallback(() => {
    localStorage.clear();
    setData(null);
  }, []);

  return (
    <UserContext.Provider
      value={{
        signIn,
        signOut,
        user: data,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

function useUser(): UserContextData {
  const context = useContext(UserContext);

  return context;
}

export { UserProvider, useUser };

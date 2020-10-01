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
    try {
      const response = await axios.post('/api/login', { code, password });
      const { token, name } = response.data;

      axios.defaults.headers.authorization = `Bearer ${token}`;

      router.push('/dashboard');
      setData({ token, name });
    } catch (err) {
      alert(err.response.data.message);
    }
  }, []);

  const signOut = useCallback(() => {
    setData(null);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      if (data === null) {
        if (router.pathname !== '/register' && router.pathname !== '/') {
          window.location.href = '/';
        }
      }
    };

    if (data === null) {
      if (router.pathname !== '/register' && router.pathname !== '/') {
        window.location.href = '/';
      }
    }

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [data]);

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

function useAuth(): UserContextData {
  const context = useContext(UserContext);

  return context;
}

export { UserProvider, useAuth };

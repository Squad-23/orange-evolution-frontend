import type { AxiosInstance, AxiosResponse } from 'axios';
import axios from 'axios';
import type { PropsWithChildren } from 'react';
import { useEffect, useMemo, createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Api } from '../providers/Api';
import type { UserData, UserLoginRes } from '../types/user';
import { InitialUserData } from '../types/user';

interface UserContextProps {
  user: UserData;
  token: string;
  privateApi: AxiosInstance;
  login: (email: string, password: string) => Promise<UserData>;
  logout: () => void;
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps);

export function UserContextProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<UserData>(InitialUserData);
  const [token, setToken] = useState('');
  const navigate = useNavigate();
  const privateApi = axios.create({ headers: { Authorization: `Bearer ${token}` } });

  useEffect(() => {
    localStorage.user = JSON.stringify(user);
    localStorage.token = token;
  }, [user, token]);

  const login = async (email: string, password: string) => {
    const { data }: AxiosResponse<UserLoginRes> = await Api.post('/user/login', {
      email,
      password,
    });

    setUser(data.user);
    setToken(data.token);

    return data.user;
  };

  const value = useMemo(
    () => ({
      user,
      token,
      privateApi,
      login,
      logout: () => {
        setUser(InitialUserData);
        setToken('');
        navigate('/');
      },
    }),
    [user, token, privateApi, navigate],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

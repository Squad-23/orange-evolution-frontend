import type { AxiosResponse } from 'axios';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { PropsWithChildren } from 'react';

import type { UserTrail } from '../types/trails';

import { UserContext } from './user';

interface TrailContextProps {
  trails: UserTrail[];
}

export const TrailContext = createContext<TrailContextProps>({} as TrailContextProps);

export function TrailContextProvider({ children }: PropsWithChildren) {
  const [trails, setTrails] = useState<UserTrail[]>([]);

  const { user, privateApi } = useContext(UserContext);

  useEffect(() => {
    console.log(user.id);
    if (user.id) {
      void (async () => {
        await privateApi
          .get(`/user/${user.id}/trails`)
          .then(({ data }: AxiosResponse<{ trails: UserTrail[] }>) => setTrails(data.trails))
          .catch((err) => {
            console.log(err);
          });
      })();
    }
  }, [user, privateApi]);

  const value = useMemo(
    () => ({
      trails,
    }),
    [trails],
  );

  return <TrailContext.Provider value={value}>{children}</TrailContext.Provider>;
}

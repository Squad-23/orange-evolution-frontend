export interface UserData {
  name: string;
  email: string;
  thisADM: boolean;
  trails: string[];
  completeds: string[];
}

export interface UserLoginRes {
  user: UserData;
  token: string;
}

export const InitialUserData: UserData = {
  name: '',
  email: '',
  thisADM: false,
  completeds: [],
  trails: [],
};

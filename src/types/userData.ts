export interface UserData {
  id: string;
  nombre: string;
  edad: string;
}

export interface UserFront {
  id: string;
  name: string;
  age: string;
}

//Redux
export interface UserDataState {
  loading: boolean;
  arrUserData: UserFront[];
  msmError: string;
  showMsmError: boolean;
  msmSuccessful: string;
  showMsmSuccessful: boolean;
}
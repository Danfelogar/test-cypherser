export enum TypeSlices {
  Root = 'root',
  Setting = 'settings',
  UserData = 'userData',
}

export enum TypeActions {
  //settings
  SettingsChangeThemeDarkMode = 'settings/changeThemeDarkMode',
  SettingsChangeThemeLightMode = 'settings/changeThemeLightMode',
  //userData
  UserDataGet = 'userData/get',
  UserDataCreate = 'userData/create',
  UserDataDelete = 'userData/delete',
}

export enum TypeEnvironment {
  Production = 'Production',
  Development = 'Development',
}

export enum TypeMSMErrorGeneric {
  GenericError = 'Ocurrió un error inesperado',
}

export enum TypeStateAuth {
  Pending = 'pending',
  Login = 'login',
  Logout = 'logout',
}

export enum TypeImage {
  Local = 'local',
  Remote = 'remote',
}
import {UserSettingsActionTypes} from "../settings/userSettingsActionTypes";

export interface IGoogleCloudTranslateApiKey {
  type: string,
  project_id: string,
  private_key_id: string,
  private_key: string,
  client_email: string,
  client_id: string,
  auth_uri: string,
  token_uri: string,
  auth_provider_x509_cert_url: string,
  client_x509_cert_url: string
}

export interface IUserSettings {
  serviceAccountKeys: {
    cloudTranslationApiKey: IGoogleCloudTranslateApiKey
  },
}

export interface UserSettingsState {
  userSettings: IUserSettings,
  pending: boolean,
  success: boolean,
  error: string | null
}

export interface LoadUserSettings {
  type: typeof UserSettingsActionTypes.LOAD_USER_SETTINGS
}

export interface LoadUserSettingsSuccess {
  type: typeof UserSettingsActionTypes.LOAD_USER_SETTINGS_SUCCESS,
  payload: {userSettings: IUserSettings}
}

export interface LoadUserSettingsFailure {
  type: typeof UserSettingsActionTypes.LOAD_USER_SETTINGS_FAILURE,
  payload: {error: string}
}

export interface SaveUserSettings {
  type: typeof UserSettingsActionTypes.SAVE_USER_SETTINGS,
  payload: {userSettings: IUserSettings}
}

export interface SaveUserSettingsSuccess {
  type: typeof UserSettingsActionTypes.SAVE_USER_SETTINGS_SUCCESS,
  payload: {userSettings: IUserSettings}
}

export interface SaveUserSettingsFailure {
  type: typeof UserSettingsActionTypes.SAVE_USER_SETTINGS_FAILURE,
  payload: {error: string}
}

export interface ResetUserSettings {
  type: typeof UserSettingsActionTypes.RESET_USER_SETTINGS
}

export type UserSettingsActions =
  LoadUserSettings |
  LoadUserSettingsSuccess |
  LoadUserSettingsFailure |
  SaveUserSettings |
  SaveUserSettingsSuccess |
  SaveUserSettingsFailure |
  ResetUserSettings;
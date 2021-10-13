import {IUserSettings, UserSettingsActions, UserSettingsState} from "../types/UserSettings";
import {UserSettingsActionTypes} from "./userSettingsActionTypes";

const initialState: UserSettingsState = {
  userSettings: {
    serviceAccountKeys: {
      cloudTranslationApiKey: {
        type: '',
        project_id: '',
        private_key_id: '',
        private_key: '',
        client_email: '',
        client_id: '',
        auth_uri: '',
        token_uri: '',
        auth_provider_x509_cert_url: '',
        client_x509_cert_url: ''
      }
    }
  },
  pending: false,
  success: true,
  error: null
};

export const userSettingsReducer = (state = initialState, action: UserSettingsActions) => {
  switch (action.type) {
    case UserSettingsActionTypes.LOAD_USER_SETTINGS_SUCCESS:
      return {...state, userSettings: action.payload.userSettings, success: true, error: null}
    case UserSettingsActionTypes.LOAD_USER_SETTINGS_FAILURE:
      return {...state, success: false, error: action.payload.error}
    case UserSettingsActionTypes.SAVE_USER_SETTINGS_SUCCESS:
      return {...state, userSettings: action.payload.userSettings, success: true, error: null}
    case UserSettingsActionTypes.SAVE_USER_SETTINGS_FAILURE:
      return {...state, success: false, error: action.payload.error}
    default:
      return state;
  }
};

export const userSettingsActions = {
  loadUserSettings: () => ({
    type: UserSettingsActionTypes.LOAD_USER_SETTINGS
  }),
  loadUserSettingsSuccess: (userSettings: IUserSettings) => ({
    type: UserSettingsActionTypes.LOAD_USER_SETTINGS_SUCCESS,
    payload: {userSettings}
  }),
  loadUserSettingsFailure: (errorMessage: string) => ({
    type: UserSettingsActionTypes.LOAD_USER_SETTINGS_FAILURE,
    payload: {error: errorMessage}
  }),
  saveUserSettings: (userSettings: IUserSettings) => ({
    type: UserSettingsActionTypes.SAVE_USER_SETTINGS,
    payload: {userSettings}
  }),
  saveUserSettingsSuccess: (useSettings: IUserSettings) => ({
    type: UserSettingsActionTypes.SAVE_USER_SETTINGS_SUCCESS,
    payload: {useSettings}
  }),
  saveUserSettingsFailure: (errorMessage: string) => ({
    type: UserSettingsActionTypes.SAVE_USER_SETTINGS_FAILURE,
    payload: {error: errorMessage}
  }),
};

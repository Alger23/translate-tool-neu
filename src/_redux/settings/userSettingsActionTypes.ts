export enum UserSettingsActionTypes {
  LOAD_USER_SETTINGS = "[UserSettings] Load from storage",
  LOAD_USER_SETTINGS_SUCCESS = "[UserSettings] Load from storage success",
  LOAD_USER_SETTINGS_FAILURE = "[UserSettings] Load from storage failure",

  SAVE_USER_SETTINGS = "[UserSettings] Save from storage",
  SAVE_USER_SETTINGS_SUCCESS = "[UserSettings] Save from storage success",
  SAVE_USER_SETTINGS_FAILURE = "[UserSettings] Save from storage failure",

  GET_USER_SETTINGS = "[UserSettings] Get settings",
  GET_USER_SETTINGS_SUCCESS = "[UserSettings] Get settings success",
  GET_USER_SETTINGS_FAILURE = "[UserSettings] Get settings failure",

  SET_USER_SETTINGS = "[UserSettings] Set settings",
  SET_USER_SETTINGS_SUCCESS = "[UserSettings] Set settings",
  SET_USER_SETTINGS_FAILURE = "[UserSettings] Set settings",
}

import {call, put, takeLatest, SagaReturnType} from "redux-saga/effects";
import {IUserSettings, SaveUserSettings} from "../types/UserSettings";
import {userSettingsActions } from "./userSettingsReducer";
import {UserSettingsActionTypes} from "./userSettingsActionTypes";

enum StorageBuckets {
  UserSettings = "UserSettings"
}

// 回傳 Promise<T> 的用 SagaReturnType，回傳是一般資料的用 ReturnType
type ReadDataResponse = SagaReturnType<typeof io.readUserSettings>;
type WriteDataResponse = SagaReturnType<typeof io.writeUserSettings>;

const io = {
  readUserSettings: () => {
    return Neutralino.storage.getData({
      bucket: StorageBuckets.UserSettings
    });
  },
  writeUserSettings: (userSettings: IUserSettings) => {
    return Neutralino.storage.putData({
      bucket: StorageBuckets.UserSettings,
      data: JSON.stringify(userSettings)
    });
  }
}
function getErrorMessage(e:any){
  let errorMessage: string = '';
  if(e instanceof TypeError) {
    errorMessage = (e as TypeError).message;
  } else if (typeof e === "string"){
    errorMessage = e;
  } else {
    console.log(e);
    errorMessage = 'unexpected, please trace'
  }
  return errorMessage;
}

//const getUserSettingsState = (state: RootAppState) => state.settings.userSettings;

function* saveUserSettings(action: SaveUserSettings) {
  try {
    //const userSettings: ReturnType<typeof getUserSettingsState> = yield select(getUserSettingsState);
    const response: WriteDataResponse = yield call(io.writeUserSettings, action.payload.userSettings);
    if(response.success) {
      yield put(userSettingsActions.saveUserSettingsSuccess(action.payload.userSettings));
    }else{
      yield put(userSettingsActions.saveUserSettingsFailure(response.error!))
    }
  } catch (e) {
    let errorMessage = getErrorMessage(e);
    yield put(userSettingsActions.saveUserSettingsFailure(errorMessage));
  }
}

function* loadUserSettings() {
  try {
    const response: ReadDataResponse = yield call(io.readUserSettings);
    if(response.success){
      const userSettings: IUserSettings = JSON.parse(response.data!);
      yield put(userSettingsActions.loadUserSettingsSuccess(userSettings));
    } else {
      yield put(userSettingsActions.loadUserSettingsFailure(response.error!));
    }
  } catch (e) {
    let errorMessage = getErrorMessage(e);
    yield put(userSettingsActions.loadUserSettingsFailure(errorMessage));
  }
}

export function* saga() {
  yield takeLatest(UserSettingsActionTypes.LOAD_USER_SETTINGS, loadUserSettings);
  yield takeLatest(UserSettingsActionTypes.SAVE_USER_SETTINGS, saveUserSettings);
}
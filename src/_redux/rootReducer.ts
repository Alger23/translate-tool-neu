import {combineReducers} from "redux";
import {all} from "redux-saga/effects";
import {userSettingsReducer} from "./settings/userSettingsReducer";
import * as userSettings from "./settings/userSettingsSaga";


const rootReducer = combineReducers ({
  settings: userSettingsReducer
});

export function* rootSaga(){
  yield all([
    userSettings.saga()
  ]);
}

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;


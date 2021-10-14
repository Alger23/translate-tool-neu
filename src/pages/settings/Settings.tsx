import {Button, ButtonGroup,} from "@mui/material";
import {RootAppState} from "../../_redux/types/App";
import {userSettingsActions} from "../../_redux/settings/userSettingsReducer";
import {connect, ConnectedProps} from "react-redux";
import {useEffect, useState} from "react";
import {IGoogleCloudTranslateApiKey, IUserSettings} from "../../_redux/types/UserSettings";
import GoogleApiKeyConfig from "./GoogleApiKeyConfig";


const mapState = (state: RootAppState) => ({
  userSettings: state.settings.userSettings
});

const {
  saveUserSettings,
  resetUserSettings,
} = userSettingsActions;
const mapDispatch = {
  saveUserSettings,
  resetUserSettings,
};
const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & SettingsPageProps

interface SettingsPageProps {
}


const Settings = (props: Props) => {
  const [settings, setSettings] = useState<IUserSettings>(props.userSettings);

  useEffect(() => {
    setSettings(props.userSettings);
  }, [props.userSettings])

  function save() {
    props.saveUserSettings(settings);
  }

  const configChange = (config: IGoogleCloudTranslateApiKey) => {
    setSettings((s) => ({
      ...s,
      serviceAccountKeys: {
        cloudTranslationApiKey: {
          ...s.serviceAccountKeys.cloudTranslationApiKey,
          ...config
        }
      }
    }));
    return;
  }

  const reset = () => {
    props.resetUserSettings();
  };

  return (
    <div>
      <h2>Settings</h2>
      <ButtonGroup size="small" aria-label="small button group">
        <Button variant="outlined" onClick={save}>Save</Button>
        <Button variant="outlined" onClick={reset}>Reset</Button>
      </ButtonGroup>

      <GoogleApiKeyConfig config={settings.serviceAccountKeys.cloudTranslationApiKey} configChange={configChange}/>
    </div>
  );
};

export default connector(Settings);
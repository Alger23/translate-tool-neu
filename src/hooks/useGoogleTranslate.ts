import {useMemo} from "react";
import {useSelector} from "react-redux";
import {RootAppState} from "../_redux/types/App";

const {Translate} = require('@google-cloud/translate').v2;

export const useGoogleTranslate = () => {
  const config = useSelector((state: RootAppState) => state.settings.userSettings.serviceAccountKeys.cloudTranslationApiKey)
  const translate = useMemo(() => {
    return new Translate({
      credentials: {
        private_key: config.private_key,
        client_email: config.client_email
      },
      projectId: config.project_id
    })
  }, [config]);

  return translate;
};

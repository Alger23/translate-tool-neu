import {Box, Button, Grid, TextField} from "@mui/material";
import Typography from '@mui/material/Typography';
import {ChangeEvent} from "react";
import {IGoogleCloudTranslateApiKey} from "../../_redux/types/UserSettings";

interface GoogleApiKeyConfigProps {
  config: IGoogleCloudTranslateApiKey;
  configChange: (config: IGoogleCloudTranslateApiKey) => void;
}

const GoogleApiKeyConfig = ({config, configChange}: GoogleApiKeyConfigProps) => {

  const valueChange = (e: ChangeEvent<HTMLInputElement>) =>
    configChange({...config, [e.target.name]: e.target.value});

  const openFile = async () => {
    let response = await Neutralino.os.showDialogOpen({
      title: 'Select a folder',
      isDirectoryMode: false,
      filter: ['json', '*']
    });
    if (response.success && response.selectedEntry) {
      let openFile = await Neutralino.filesystem.readFile({fileName: response.selectedEntry});
      let data: IGoogleCloudTranslateApiKey = JSON.parse(openFile.data);
      configChange({...config, ...data});
    } else {
      console.log('load file failure: ' + response.error);
    }
  }

  return (

    <Box
      component="form"
      sx={{
        //'& .MuiTextField-root': {m: 1, width: '25ch'},
      }}
      noValidate
      autoComplete="off">

      <Typography variant="h5">Google Cloud API Key</Typography>

      <Grid container alignItems={"flex-start"} spacing={2}>
        <Grid item xs={12}>
          <Button variant="outlined" size="small" onClick={openFile}>Load from API key file...</Button>
        </Grid>
        <Grid item xs={12}>
          <TextField name="type" value={config.type} onChange={valueChange}
                     fullWidth
                     label="Type" variant="standard"/>
        </Grid>
        <Grid item xs={12}>
          <TextField name="project_id" value={config.project_id} onChange={valueChange}
                     fullWidth
                     label="Project ID" variant="standard"/>
        </Grid>
        <Grid item xs={12}>
          <TextField name="private_key_id" value={config.private_key_id} onChange={valueChange}
                     fullWidth
                     label="Private Key ID" variant="standard"/>
        </Grid>
        <Grid item xs={12}>
          <TextField name="private_key" value={config.private_key} onChange={valueChange}
                     multiline
                     fullWidth
                     label="Private Key" variant="standard"/>
        </Grid>
        <Grid item xs={12}>
          <TextField name="client_email" value={config.client_email} onChange={valueChange}
                     fullWidth
                     label="Client Email" variant="standard"/>
        </Grid>
        <Grid item xs={12}>
          <TextField name="client_id" value={config.client_id} onChange={valueChange}
                     fullWidth
                     label="Client ID" variant="standard"/>
        </Grid>
        <Grid item xs={12}>
          <TextField name="auth_uri" value={config.auth_uri} onChange={valueChange}
                     fullWidth
                     label="auth_uri" variant="standard"/>
        </Grid>
        <Grid item xs={12}>
          <TextField name="token_uri" value={config.token_uri} onChange={valueChange}
                     fullWidth
                     label="token_uri" variant="standard"/>
        </Grid>
        <Grid item xs={12}>
          <TextField name="auth_provider_x509_cert_url" value={config.auth_provider_x509_cert_url}
                     onChange={valueChange}
                     fullWidth
                     label="auth_provider_x509_cert_url" variant="standard"/>
        </Grid>
        <Grid item xs={12}>
          <TextField name="client_x509_cert_url" value={config.client_x509_cert_url} onChange={valueChange}
                     multiline
                     fullWidth
                     label="client_x509_cert_url" variant="standard"/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default GoogleApiKeyConfig;
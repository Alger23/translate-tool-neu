import React, {SyntheticEvent} from 'react';
import './App.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {styled} from '@mui/material/styles';
import Settings from "./pages/settings/Settings";
import {userSettingsActions} from "./_redux/settings/userSettingsReducer";
import {connect, ConnectedProps} from "react-redux";

const CustomTab = styled(Tab)({
  textTransform: "none"
});

const {loadUserSettings} = userSettingsActions;
const mapDispatch = {
  loadUserSettings
};
const connector = connect(null, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & AppProps

interface AppProps {
}


interface TabPanelProps {
  value: number;
  index: number;
  //children: React.ReactNode;
}

const TabPanel: React.FC<TabPanelProps> = (props) => {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{p: 3}}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}


function App(props: Props) {
  const [value, setValue] = React.useState<number>(0);
  debugger
  props.loadUserSettings();

  const handleChange = (event: SyntheticEvent, newValue: any) => {
    setValue(newValue);
  };


  return (
    <div className="App">
      <Box sx={{width: '100%'}}>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
          <Tabs value={value} onChange={handleChange} aria-label="Main tabs" centered>
            <CustomTab label="Translate" {...a11yProps(0)} />
            <CustomTab label="Settings" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>

        </TabPanel>
        <TabPanel value={value} index={1}>
          <Settings/>
        </TabPanel>
      </Box>
    </div>
  );
}

export default connector(App);

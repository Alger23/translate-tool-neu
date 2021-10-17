import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  InputLabel,
  MenuItem, Paper,
  Select,
  SelectChangeEvent, Table,
  TableBody, TableCell,
  TableContainer,
  TableRow,
  TextField,
} from "@mui/material";
import {ReactNode, useState} from "react";
import {useGoogleTranslate} from "../../hooks/useGoogleTranslate";
import {TranslateRequest} from "@google-cloud/translate/build/src/v2";
import CopySpan from "./CopySpan";


const Translate = () => {
  const [from, setFrom] = useState<string>("auto");
  const [toLangs, setToLangs] = useState<string[]>(['ja', 'en']);
  const [rawText, setRawText] = useState<string>('');
  const [result, setResult] = useState<{ [name: string]: string }>();
  const translate = useGoogleTranslate();

  const fromHandleChange = (e: SelectChangeEvent<string>, child: ReactNode) => {
    setFrom(e.target.value);
  };
  const toLangsHandleChange = (e: SelectChangeEvent<any>, child: ReactNode) => {
    setToLangs(e.target.value);
  };


  const translateText = async () => {
    await Promise.all(
      toLangs.map(to => {
        if (from === 'auto') {
          return translate.translate(rawText, to)
        } else {
          let options: TranslateRequest = {
            from: from,
            to: to
          };
          return translate.translate(rawText, options);
        }
      })
    ).then(data => {
      let result: { [name: string]: string } = {};
      toLangs.forEach((lang, i) => result[lang] = data[i][0] as string);
      setResult(result);
    }).catch(error => {
      console.log(error)
    });
  };


  const openBrowser = () => {
    Neutralino.app.open({
      url: `https://translate.google.com/?sl=${from}&tl=${toLangs[0]}&text=${rawText}&op=translate`
    });
  };

  return (
    <div>
      <Box component="form"
           sx={{
             '& > :not(style)': {m: 1},
           }}
           noValidate
           autoComplete="off">

        <FormControl fullWidth>
          <InputLabel id="from-label">From</InputLabel>
          <Select
            labelId="from-label"
            id="from"
            value={from}
            label="From"
            onChange={fromHandleChange}
            size="small"
          >
            <MenuItem value="auto">Auto Detect</MenuItem>
            <MenuItem value="zh-TW">zh-TW</MenuItem>
            <MenuItem value="ja">ja</MenuItem>
            <MenuItem value="en">en</MenuItem>
          </Select>
        </FormControl>

        <TextField name="text" placeholder="multi-line" multiline fullWidth
                   value={rawText}
                   onChange={(e) => setRawText(e.target.value)}
                   sx={{mb: '0!important'}}/>

        <ButtonGroup fullWidth sx={{mt: '0!important'}}>
          <Button onClick={translateText}>Translate</Button>
          <Button onClick={openBrowser}>Browser</Button>
        </ButtonGroup>

        <TextField
          select
          name="toLangs"
          id="toLangs"
          label="To"
          SelectProps={{
            multiple: true,
            value: toLangs,
            onChange: toLangsHandleChange
          }}
          fullWidth
          size="small"
        >
          <MenuItem value="en">en</MenuItem>
          <MenuItem value="ja">ja</MenuItem>
          <MenuItem value="th">th</MenuItem>
          <MenuItem value="zh-CN">zh-CN</MenuItem>
          <MenuItem value="zh-TW">zh-TW</MenuItem>
        </TextField>

        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              {toLangs && toLangs.map((lang, i) => (
                <TableRow key={i}>
                  <TableCell component="th" scope="row" width={30}>
                    {lang}
                  </TableCell>
                  <TableCell>
                    {result && <CopySpan value={result[lang]}/>}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </Box>
    </div>
  );
};

export default Translate;
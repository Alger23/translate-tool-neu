import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [file, setFile] = useState<string>('');

  const openFile = async () => {
    let response = await Neutralino.os.showDialogOpen({
      title: 'Select a folder',
      isDirectoryMode: false,
      filter: ['json', '*']
    });
    console.log(`You've selected: ${response.selectedEntry}`);
    setFile(response.selectedEntry);
  };

  return (
    <div className="App">
      <button onClick={openFile}>Open File</button>
      <br/>
      {file}
    </div>
  );
}

export default App;

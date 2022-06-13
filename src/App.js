import './App.css';
import { Grid, Box, Input, Button } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>The Todo App !</h1>
      </header>
      <body className="App">
        <Box>
          <Input  color='primary' variant="contained" placeholder='What do you want to do?'></Input>
          <Button variant="contained">ADD</Button>

        </Box>
      </body>
    </div>
  );
}

export default App;

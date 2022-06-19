import './App.css';
import { Box, Input, Button, Grid } from '@mui/material';
import TodoList from './components/TodoList/TodoList';


function App() {
  return (
    <Grid className="App">
      <header className="App-header">
          <h1>The Todo App !</h1>
      </header>
      
        <Box>
          <Input  color='primary' variant="contained" placeholder='What do you want to do?'></Input>
          <Button variant="contained">ADD</Button>
          <TodoList />  
        </Box>
      
    </Grid>
  );
}

export default App;

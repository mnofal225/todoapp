import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import './TodoListStyles.css';
import TodoListItem from "./TodoListItem";



const TodoList = () => {
    return (
        <Grid container className="todoListContainer">
            <Box className="todoListBox">
                <TodoListItem />
            </Box>
        </Grid> 
    );
}

export default TodoList
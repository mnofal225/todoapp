// models/todo.js

//import mongoose
const mongoose =  require("mongoose");

// Create a Schema called TodoSchema
const TodoSchema = new mongoose.Schema({

// We will add two fields for our todo; title and description
// Type of title will be String and it is a mandatory field

    title: {
        type: "String",
        required: true
    },
    description: {
        // Type of description will be String and it is not a mandatory field
        type: "String"
    },
    isDone: {
        type:"Boolean",
    }
});

// Export the model

const Todo = mongoose.model("todo", TodoSchema);

module.exports = Todo;
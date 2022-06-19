// router/todo.js
const express = require("express");
const router = express.Router();

// import the methods for the CRUD operations
const {
    getAllTodo,
    postCreateTodo,
    putUpdateTodo,
    deleteTodo
} = require("../controllers/todo");

// Add each method to the corresponding end point
/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */
router.get("/", getAllTodo);

/**
 * @route POST api/todo
 * @description add a new todo
 * @access public
 */
router.post("/", postCreateTodo);

/**
 * @route PUT api/todo/:id
 * @description update todo
 * @access public
 */
router.put("/:id", putUpdateTodo);

/**
 * @route DELETE api/todo/:id
 * @description delete todo
 * @access public
 */
router.delete("/:id", deleteTodo);

module.exports = router;
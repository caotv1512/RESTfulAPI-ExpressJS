const express = require('express');
const UserController = require('../controllers/user.controller');
const userRouter = express.Router();


//Đoạn này để khai báo like contructor
const userController = new UserController();
userRouter.get("/users", (req, res) => {
    userController.getAllUsers(req, res)
});
userRouter.get("/user/:id", (req, res) => {
    userController.getOne(req, res)
})
userRouter.post("/user", (req, res) => {
    const newUser = req.body;
    userData.push(newUser);
    fs.writeFileSync("data/user.json", JSON.stringify(userData));
    res.status(201).send(userData);
})
userRouter.put("/user/:id", (req, res) => {
    res.send('Update User');
})
userRouter.delete("/user/:id", (req, res) => {
    res.send('Delete User');
})

module.exports = userRouter;
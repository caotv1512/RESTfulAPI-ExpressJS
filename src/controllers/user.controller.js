const UserService = require("../services/user.service");

class UserController {
    constructor() {
        this.userService = new UserService();
    }
    getAllUsers(req, res) {
        return res.status(200).send({
            msg: "Get All Users",
            data: this.userService.getAllUsers(),
        });
    }
    getOne(req, res) {
        const id = req.params.id;
        const data = this.userService.getOne(id);
        return res.status(data.status).send(data);
    }
}

module.exports = UserController;
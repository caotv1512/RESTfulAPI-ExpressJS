const UserRepository = require("../repositories/user.repository");
class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }
    getAllUsers() {}

    getOne(id) {
        const data = this.userRepository.getOne(id);;
        if (data) {
            return {
                msg: "Get One User Successfully",
                data: data,
                status: 200,
            };
        }
        return {
            msg: "User ID NOT FOUND!!!!",
            status: 404,
        };
    }
}

module.exports = UserService;
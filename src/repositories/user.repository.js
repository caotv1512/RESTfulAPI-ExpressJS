const fs = require("fs");
const userData = JSON.parse(fs.readFileSync("data/user.json"));

class UserRepository {
    constructor() {
        this.userData = userData;
    };
    getAllUsers() {
        return userData;
    }

    getOne(id) {
        const user = this.userData.find((user) => user.user_id == id);
        return user
    }
}

module.exports = UserRepository
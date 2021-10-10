"use strict"

// const { users } = require("../routes/home");

class UserStorage {
    static #users = {
     id : ["home5635", "이명로", "정현진"],
     psword : ["12344", "123", "black"],
     name: ["홍길동", "강호동", "이승기"],
    };

    static getUsers(...fields) {
        const users = this.#users
        const newUsers = fields.reduce((newUsers, fields)=>{
            if (users.hasOwnProperty(fields)) {
                newUsers[fields] = users[fields];
            }
            return newUsers;
        }, {});
        return newUsers;
    } 

    static getUsersInfo(id) {
        const users = this.#users
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((newUsers, info) => {
            newUsers[info] = users[info][idx];
            return newUsers;
        }, {});

        return userInfo;
    }
}

module.exports = UserStorage;
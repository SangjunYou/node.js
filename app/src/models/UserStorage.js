"use strict"

class UserStorage {
    static #users = {
     id : ["home5635", "유상준", "정현진"],
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
}

module.exports = UserStorage;
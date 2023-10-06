const {ObjectID} = require("mongodb");

class ContactService{
    constructor(client) {
        this.Contact = Client.db().collection("contacts");
    }
    //Dinh nghia cac phuong thuc truy xuat csdl su dung mongodb API
}

module.exports = ContactService;
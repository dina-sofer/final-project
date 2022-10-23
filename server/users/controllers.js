const userModel = require('./model');

// users - החזרת כל ה
const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        userModel.find({}, function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

// id לפי user החזרת
const getUserByID = (id) => {
    return new Promise((resolve, reject) => {
        userModel.findById(id, function(err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data);
            }
        });
    });
}

// DB ושמירתו ב user יצירת
const createNewUser = (obj) => {
    return new Promise((resolve, reject) => {
        let user = new userModel({
            type: obj.type,
            userName: obj.userName,
            password: obj.password,
            email: obj.email,
            phoneNumber: obj.phoneNumber,
            photoDate: obj.photoDate
        });
        user.save(function(err) {
            if (err) {
                reject(err)
            } else {
                resolve('created');
            }
        });
    });
}

// user עדכון
const updateUser = (id, obj) => {
    return new Promise((resolve, reject) => {
        userModel.findByIdAndUpdate(id, {
            type: obj.type,
            userName: obj.userName,
            password: obj.password,
            email: obj.email,
            phoneNumber: obj.phoneNumber,
            photoDate: obj.photoDate
        }, function(err) {
            if (err) {
                reject(err)
            } else {
                resolve('updated');
            }
        });
    });
}

// user מחיקת
const deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        userModel.findByIdAndDelete(id, function(err) {
            if (err) {
                reject(err)
            } else {
                resolve('deleted');
            }
        });
    });
}

// ייצוא הפונקציות
module.exports = {
    getAllUsers,
    getUserByID,
    createNewUser,
    updateUser,
    deleteUser
};
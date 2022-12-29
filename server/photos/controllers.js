const photoModel = require('./model');

// photos - החזרת כל ה
const getAllPhotos = () => {
    return new Promise((resolve, reject) => {
        photoModel.find({}, function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

// id לפי photo החזרת
const getPhotoByID = (id) => {
    return new Promise((resolve, reject) => {
        photoModel.findById(id, function(err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data);
            }
        });
    });
}

// DB ושמירתו ב photo יצירת
const createNewPhoto = (obj) => {
    return new Promise((resolve, reject) => {
        let photo = new photoModel({
            path: obj.path,
            v: obj.v,
            x: obj.x,
            vx: obj.vx
        });
        photo.save(function(err) {
            if (err) {
                reject(err)
            } else {
                resolve('created');
            }
        });
    });
}

// photo עדכון
const updatePhoto = (id, obj) => {
    return new Promise((resolve, reject) => {
        photoModel.findByIdAndUpdate(id, {
            path: obj.path,
            v: obj.v,
            x: obj.x,
            vx: obj.vx
        }, function(err) {
            if (err) {
                reject(err)
            } else {
                resolve('updated');
            }
        });
    });
}

// photo מחיקת
const deletePhoto = (id) => {
    return new Promise((resolve, reject) => {
        photoModel.findByIdAndDelete(id, function(err) {
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
    getAllPhotos,
    getPhotoByID,
    createNewPhoto,
    updatePhoto,
    deletePhoto
};
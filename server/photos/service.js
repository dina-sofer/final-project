const express = require('express');
const photoController = require('./controllers');

const router = express.Router();

// photos - החזרת כל ה
router.get('/', async function(req, res) {
    photoController.getAllPhotos()
    .then(data => { return res.json(data) });
});

// id לפי photo החזרת
router.get('/:id', async function(req, res) {
    let id = req.params.id;
    photoController.getPhotoByID(id)
    .then(data => { return res.json(data) });
});

// DB ושמירתו ב photo יצירת
router.post('/', async function(req, res) {
    let body = req.body;
    photoController.createNewPhoto(body)
    .then(data => { return res.json(data) });
});

// photo עדכון
router.put('/:id', async function(req, res) {
    let id = req.params.id;
    let body = req.body;
    photoController.updatePhoto(id, body)
    .then(data => { return res.json(data) });
});

// photo מחיקת
router.delete('/:id', async function(req, res) {
    let id = req.params.id;
    photoController.deletePhoto(id)
    .then(data => { return res.json(data) });
});

module.exports = router;
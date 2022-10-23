const express = require('express');
const userController = require('./controllers');

const router = express.Router();

// users - החזרת כל ה
router.get('/', async function(req, res) {
    userController.getAllUsers()
    .then(data => { return res.json(data) });
});

// id לפי user החזרת
router.get('/:id', async function(req, res) {
    let id = req.params.id;
    userController.getUserByID(id)
    .then(data => { return res.json(data) });
});

// DB ושמירתו ב user יצירת
router.post('/', async function(req, res) {
    let body = req.body;
    userController.createNewUser(body)
    .then(data => { return res.json(data) });
});

// user עדכון
router.put('/:id', async function(req, res) {
    let id = req.params.id;
    let body = req.body;
    userController.updateUser(id, body)
    .then(data => { return res.json(data) });
});

// user מחיקת
router.delete('/:id', async function(req, res) {
    let id = req.params.id;
    userController.deleteUser(id)
    .then(data => { return res.json(data) });
});

module.exports = router;
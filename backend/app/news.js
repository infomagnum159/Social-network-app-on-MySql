const express = require('express');
const multer = require('multer');
const path = require('path');
const config = require('../config');
const {nanoid} = require('nanoid');
const router = express.Router();
const mysql = require('../mysqlDb');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname))
    }
});

const upload = multer({storage});

router.get('/', async (req, res) => {
    const [news] = await mysql.getConnection().query('SELECT * FROM news');
    res.send(news);
});

router.get('/:id', async (req, res) => {
    const [news] = await mysql.getConnection().query(
        'SELECT * FROM news where id = ?',
        [req.params.id]);
    res.send(news);
});

router.delete('/:id', async (req, res) => {

    await mysql.getConnection().query(
        'DELETE FROM news where id = ?',
        [req.params.id]
    );
    res.send({message: "was DELETED"});
})

router.post('/', upload.single('image'), async (req, res) => {
    if (!req.body.title || !req.body.text) {
        return res.status(400).send({error: 'Data not valid'});
    }

    const news  = {
        title: req.body.title,
        text: req.body.text,
    };

    if (req.file) {
        news.image = req.file.filename;
    }

    const newNews = await mysql.getConnection().query(
        'INSERT INTO ?? (title, text, image) values (?, ?, ?)',
        ['news', news.title, news.text, news.image]
    );

    res.send({
        ...news,
        id: newNews.insertId
    });
});

module.exports = router;
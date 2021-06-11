const router = require('express').Router();
const { Queue } = require('../../models/');

router.post('/', (req, res) => {
    Queue.create({
        
    })
})
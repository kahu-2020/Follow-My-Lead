const express = require('express');
const db = require('../db/dogFeedbackData');

const router = express.Router();

router.get('/:id', (req, res) => {
  db.getFeedback(req.params.id).then(feedback => {
    res.json(feedback);
  });
});

module.exports = router;

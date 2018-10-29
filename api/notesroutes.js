const express = require('express');
const router = express.Router();

// uuid('Lambda Notes', process.env.NAMESPACE);

router.get('/', (req, res, next) => res.status(200).json({ message: 'Hello, world!' }));

module.exports = router;

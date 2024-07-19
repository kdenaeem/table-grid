const express = require('express');
const router = express.Router();

const data = [
  { name: "Dan", age: 32 },
  { name: "Sara", age: 28 },
  { name: "Mike", age: 35 }
];

router.get('/car_data', (req, res) => {
  res.json(data);
});

module.exports = router;

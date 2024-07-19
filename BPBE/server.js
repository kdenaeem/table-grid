const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const carRouter = require('./Routes/Car');

app.use('/car', carRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

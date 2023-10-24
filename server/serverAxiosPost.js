const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/postData', (req, res) => {
  const { data } = req.body;
  // Process the data as needed
  console.log('Received data:', data);

  res.json({ message: 'Data received and processed on the server' });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

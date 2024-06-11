const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());
app.set('json spaces', 2);
const port = 3000;

const statusesData = JSON.parse(fs.readFileSync('status.json'));

app.get('/status', (req, res) => {
  const randomIndex = Math.floor(Math.random() * statusesData.length);
  const randomStatus = statusesData[randomIndex];
  const responseData = {
    title: randomStatus.title,
    url: randomStatus.url,
    VideoCount: randomStatus.videoCount 
  };
  console.log('Response:', responseData);
  res.json(responseData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const express = require('express');
const app = express();
const port = 8080;
const path = require('path')


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));

});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/about.html'))

});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '/contact-me.html'))
  console.log(res.statusCode);
});

app.get('', (req, res) => {
  if (res.statusCode == 404) {
    res.sendFile(path.join(__dirname, '/404.html'));
  }
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '404.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

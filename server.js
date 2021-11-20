const http = require('http');

const server = http.createServer((req, res) => {
  //   console.log(req);
  //   console.log(req.method);
  const { headers, url, method } = req;
  console.log(headers, url, method);
  res.end();
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

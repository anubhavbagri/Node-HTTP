const http = require('http');

const server = http.createServer((req, res) => {
  //   console.log(req);
  //   console.log(req.method);
  // const { headers, url, method } = req;
  // console.log(headers, url, method);
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Hello</h1>');
  res.write('<h2>Hello Again</h2>');
  res.end();
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

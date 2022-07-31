const fs = require('fs');
const path = require('path');

const http = require('http');
const PORT = process.env.PORT || 3000;
const hostname ='127.0.0.1';


const requestHandler = (request, response) => {
  const { method, url } = request;
  content = JSON.stringify({name:"Slava", login:"Slava",location:"Belarus"});
  response.writeHead(200, {
    'Content-type': "application/json"
  });
  resp.end(content)
};

const server = http.createServer(requestHandler);

server.listen(PORT, hostname, () => {
  console.log(`Сервер запущен по адреcу: http://${hostname}:${PORT}`);
});


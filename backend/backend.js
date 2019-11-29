const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

let interval;
let i=0;

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');

  if (interval) {
    clearInterval(interval);
  }

  interval = setInterval(() => sendData(ws), 1000);
});

const sendData = async ws => {
  try {
    i++;
    ws.send('Ping ' + i);
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
}

wss.on('close', function connection(ws) {
  console.log('Disconnected ');
});

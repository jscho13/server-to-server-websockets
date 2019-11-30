const wss = require('socket.io')();

let interval;
let i=0;
let sequenceNumberByClient = new Map();

console.info('backend');
wss.on('connection', function connection(ws) {
  console.info(`Client connected [id=${ws.id}]`);
  sequenceNumberByClient.set(ws, 1);

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  if (interval) {
    clearInterval(interval);
  }

  interval = setInterval(() => sendData(ws), 1000);
});

const sendData = async ws => {
  try {
    i++;
    for (const [client, sequenceNumber] of sequenceNumberByClient.entries()) {
      client.emit("seq-num", 'this is from backend: ' + sequenceNumber);
      sequenceNumberByClient.set(client, sequenceNumber + 1);
    }
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
}

wss.on('close', function connection(ws) {
  console.log('Disconnected ');
});

wss.listen(4000);

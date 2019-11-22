const socketIOClient = require("socket.io-client");

const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
const port = process.env.PORT || 4000;
const index = require("./routes/index");
const app = express();

app.use(index);

const server = http.createServer(app);
const io = socketIo(server); // < Interesting!
server.listen(port, () => console.log(`Listening on port ${port}`));

let interval;
let i=0;
let sequenceNumberByClient = new Map();

// This file needs to connect to backend
io.on("connection", socket => {
	console.info(`Client connected [id=${socket.id}]`);
  console.info('middleware');
	sequenceNumberByClient.set(socket, 1);



  const beSocket = socketIOClient('http://127.0.0.1:4001');
  beSocket.on("seq-num", (msg) => console.info(msg));


	// when socket disconnects, remove it from the list:
	socket.on("disconnect", () => {
		sequenceNumberByClient.delete(socket);
		console.info(`Client gone [id=${socket.id}]`);
	});

  if (interval) {
    clearInterval(interval);
  }

  interval = setInterval(() => sendExpressData(socket), 1000);
});

const sendExpressData = async socket => {
  try {
		for (const [client, sequenceNumber] of sequenceNumberByClient.entries()) {
			client.emit("seq-num", 'this is from express: ' + sequenceNumber);
			sequenceNumberByClient.set(client, sequenceNumber + 1);
    }
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
}


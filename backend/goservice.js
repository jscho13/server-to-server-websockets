const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
const port = process.env.PORT || 4001;
const index = require("./routes/index");
const app = express();

app.use(index);

const server = http.createServer(app);
const io = socketIo(server); // < Interesting!
server.listen(port, () => console.log(`Listening on port ${port}`));

let interval;
let i=0;
let sequenceNumberByClient = new Map();
console.log(sequenceNumberByClient);

io.on("connection", socket => {
	console.info(`Client connected [id=${socket.id}]`);
  console.info('backend');
	sequenceNumberByClient.set(socket, 1);

	// when socket disconnects, remove it from the list:
	socket.on("disconnect", () => {
		sequenceNumberByClient.delete(socket);
		console.info(`Client gone [id=${socket.id}]`);
	});

  if (interval) {
    clearInterval(interval);
  }

  interval = setInterval(() => sendGoData(socket), 1000);

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

const sendGoData = async socket => {
  try {
		for (const [client, sequenceNumber] of sequenceNumberByClient.entries()) {
			client.emit("seq-num", 'this is from the backend: ' + sequenceNumber);
			sequenceNumberByClient.set(client, sequenceNumber + 1);
    }
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
}


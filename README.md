# Websocket Demo
> Demonstrates websocket architecture when traversing several layers

```
.--------.      .----------.      .----------.
| CLIENT | <--> | SERVER A | <--> | SERVER B |
'--------'      '----------'      '----------'
```

Most websockets examples show a connection between a client and server. This repo is an example of a client, server to server websocket. You may need this pattern if you have middleware that connects your client and serverside code.

![demo GIF](cli-ser-ser.gif)

## Table of Contents

- [Installation](#installation)
- [Clone](#clone)
- [Setup](#setup)
- [Technology](#technology)
- [License](#license)


## Installation

- Node v8.16.2
- React v16.12


### Clone

- Clone this repo to your local machine using `https://github.com/jscho13/server-to-server-websockets`


### Setup

> Download dependencies for both client and server

```shell
$ npm install
$ cd ./frontend && npm install
```


## Usage
> Start the backend dummy service
```shell
$ cd backend
$ node backend.js
```

> Run the express middleware dummy service
```shell
$ cd ../middleware
$ node middleware.js
```

> Start client side react 
```shell
$ cd ../frontend
$ npm start
```


## Technology
- <a href="https://socket.io/" target="_blank">Socket.io</a> is a nifty library that enables real-time, bidirectional and event-based communication. It's not a replacement for Websockets, but includes it and falls back to other techniques like long polling when it fails
- Client is a React app that utilizes client code Socket.io to connect to middleware
- Middleware is an express server that uses server-side Socket.io to create a websocket on port 4001
- Backend is a microservice that exposes a websocket on a single port 4000
- I utilized this nifty <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank">Markdown Cheatsheet</a> for this sample `README`.

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2019 © <a href="https://www.linkedin.com/in/jscho13/" target="_blank">Joseph Cho</a>.

![image](https://user-images.githubusercontent.com/8882123/111056101-775d9480-844a-11eb-8499-086105708c73.png =350x350)

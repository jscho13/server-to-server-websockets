<img src="websocket.png" style="width:200px" title="websocket" alt="websocket">

# Websocket Demo
> Demonstrates websocket architecture when traversing several layers

```
.--------.      .----------.      .----------.
| CLIENT | <--> | SERVER A | <--> | SERVER B |
'--------'      '----------'      '----------'
```

Most websockets examples show a connection between a client and server. This repo is an example of a client, server to server websocket. You may need this pattern if you have middleware that connects your client and serverside code.

Add gif of websocket ping here:
![ttystudio GIF](https://raw.githubusercontent.com/chjj/ttystudio/master/img/example.gif)

## Table of Contents

- [Installation](#installation)
- [Clone](#clone)
- [Setup](#Setup)
- [FAQ](#faq)
- [License](#license)


## Installation

- Node v8.16.2
- React v16.12

### Clone

- Clone this repo to your local machine using `https://github.com/jscho13/server-to-server-websockets`

### Setup

> Download all dependencies

```shell
$ cd ./frontend && npm install
$ cd ../middleware && npm install
$ cd ../backend && npm install
```

## Usage
- Start the backend dummy service
```shell
$ cd backend
$ node backend.js
```
- 
- 
## Documentation

- Going into more detail on code and technologies used
- I utilized this nifty <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank">Markdown Cheatsheet</a> for this sample `README`.

## FAQ

- **How do I do *specifically* so and so?**
    - No problem! Just do this.


## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2019 © <a href="https://www.linkedin.com/in/jscho13/" target="_blank">Joseph Cho</a>.

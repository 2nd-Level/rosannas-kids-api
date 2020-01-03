const express = require('express');
const helmet = require('helmet');



const server = express();
server.use(helmet())

server.get('/', async (req, res) => {
    try {
      const shoutouts = "SHOUTS";
    //   const messageOfTheDay = process.env.MOTD || 'Hello World!'; // add this line
      res.status(200).json({ motd: process.env.MOTD, shoutouts }); // change this line
    } catch (error) {
      console.error('\nERROR', error);
      res.status(500).json({ error: 'Cannot retrieve the shoutouts' });
    }
  });

module.exports = server;
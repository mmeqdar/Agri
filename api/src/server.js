const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');


//const config = require('config')
//const nodeMailer = require("nodemailer")
const register = require('./router/user.js')
const login = require('./router/user.js')
const confirmation = require('./router/user.js')
const forgot = require('./router/user.js')
const forgot1 = require('./router/user.js')
const updatepswd = require('./router/user.js')
const getRegion = require('./router/user.js')

//const passport = require('passport')
const port = process.env.PORT || 3001

//----------users---------//


class Server{
    constructor()
    {
         
        this.app = express()
        this.app.use(cors())
        this.app.use(bodyParser.json())
        this.http = http.Server(this.app)

        this.app.post('/register', register);
        this.app.post('/login', login);
        this.app.post('/confirmation', confirmation);
        this.app.post('/forgot', forgot);
        this.app.post('/forgot1', forgot1);
        this.app.post('/updatepswd', updatepswd);
        this.app.post('/getRegion', getRegion);
     }
      listen() {
            this.http.listen(port, ()=> {
            console.log(`Listening on http://localhost:3001`)
          })
        }
   }
   const server = new Server()
   server.listen()



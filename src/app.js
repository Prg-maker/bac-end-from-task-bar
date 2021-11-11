import {router} from './routes'
import express from 'express'
import cors from 'cors'
import { Server } from 'socket.io'
import http from 'http'





const app = express()

const serverHttp = http.createServer(app)

const io = new Server(serverHttp , {
  cors:{
    origin:"*"
  }
})

io.on("connection" , socket=> {
  console.log(`user id: ${socket.id}`)
})



app.use(cors())
app.use(express.json())
app.use(router)




export {io , serverHttp}

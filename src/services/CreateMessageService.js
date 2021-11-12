import prismaClient from "../prisma"
import {io} from '../app'
import {v4 as uuid} from 'uuid'

// create new message
class CreateMessageService{
  async execute(message , title){
    const createMessage = await prismaClient.message.create({
      data:{
        title,
        message
      }
    })

    const info = {
      id: uuid(),
      title: createMessage.title,
      message: createMessage.message
    }

    io.emit('new_message' , info)
    
    


    return createMessage
  }
}

export {CreateMessageService}
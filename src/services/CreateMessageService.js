import prismaClient from "../prisma"
import {io} from '../app'

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
      title: createMessage.title,
      message: createMessage.message
    }

    io.emit('new_message' , info)

    


    return createMessage
  }
}

export {CreateMessageService}
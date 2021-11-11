import prismaClient from '../prisma'


class ListMessageService{
  async execute(){
    const message = await prismaClient.message.findMany()

    return message
  }
} 

export {ListMessageService}
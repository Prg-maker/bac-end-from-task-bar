import prismaClient from '../prisma'


class DeleteMessageService{
  async execute(id){


    try{
      const deleteMessage = await  prismaClient.message.delete({
        where:{
          id
        }
      })
      return deleteMessage

    }catch(err){
      console.log(`essa mensagem já foi deletada ${err}`)
    }

  }
}

export {DeleteMessageService}
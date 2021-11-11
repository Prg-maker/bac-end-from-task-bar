import {CreateMessageService} from '../services/CreateMessageService'


class CreateMessageController{
  async handle(request , response){
    const {title , message} = request.body

    const service = new CreateMessageService()

    const result = await service.execute(title , message)


    return response.json(result)
  }
}

export {CreateMessageController} 
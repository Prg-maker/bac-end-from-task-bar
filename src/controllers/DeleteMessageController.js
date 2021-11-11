import {DeleteMessageService} from '../services/DeleteMessageService'


class DeleteMessageController{
  async handle(request , response){
    const {id} = request.body
    const service = new DeleteMessageService()
    const result = await service.execute(id)

    response.json(result)
  }
}

export {DeleteMessageController}
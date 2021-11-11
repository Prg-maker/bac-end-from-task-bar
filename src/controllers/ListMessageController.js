import {ListMessageService} from '../services/ListMessageService'


class ListMessageController{
  async handle(request , response){
    const service = new ListMessageService()
    const result = await service.execute()

    response.json(result)
  }
}

export {ListMessageController}
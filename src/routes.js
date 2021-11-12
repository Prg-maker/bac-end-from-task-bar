import {Router} from 'express'

import {CreateMessageController} from './controllers/CreateMessageController'
import {ListMessageController} from './controllers/ListMessageController'
import {DeleteMessageController} from './controllers/DeleteMessageController'

const router = Router()



router.post('/createMessage', new CreateMessageController().handle)
router.get('/listMessage', new ListMessageController().handle)
router.post('/deleteMessage', new DeleteMessageController().handle)

export {router}
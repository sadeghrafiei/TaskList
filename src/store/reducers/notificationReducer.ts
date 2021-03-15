import { NotificaionState , NotificationAction, SET_NOTFICATION } from "../types"

const initialState: NotificaionState = {
    message: '',
    type: 'success'
}

export default (state = initialState , action: NotificationAction): NotificaionState => {
    switch(action.type) {
        case SET_NOTFICATION: 
        return {
            message: action.payload.msg,
            type: action.payload.type
        }
        default: 
        return state
    }
}
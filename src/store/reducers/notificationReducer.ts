import { NotificaionState , NotificationAction } from "../types"

const initialState: NotificaionState = {
    message: '',
    type: 'success'
}

export default (state = initialState , action: NotificationAction): NotificaionState => {
    switch(action.type) {
        default: 
        return state
    }
}
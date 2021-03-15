import { NotificationAction, SET_NOTFICATION } from "../types"

export const setNotification = (msg: string , type: string = 'success'): NotificationAction => {
    return {
        type: SET_NOTFICATION,
        payload: {
            msg,
            type
        }
    }
}
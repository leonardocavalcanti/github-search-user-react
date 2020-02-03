export const USERS_SET = 'USERS_SET'
export const USERS_SELECT = 'USERS_SELECT'

export const set = (data) => {
    return {
        type: USERS_SET,
        payload: data
    };
}

export const select = (user) => {
    return {
        type: USERS_SELECT,
        payload: user
    };
}
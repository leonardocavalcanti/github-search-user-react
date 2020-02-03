export const REPOSITORIES_SET = 'REPOSITORIES_SET'
export const REPOSITORIES_SELECT = 'REPOSITORIES_SELECT'

export const set = (data) => {
    return {
        type: REPOSITORIES_SET,
        payload: data
    };
}

export const select = (repository) => {
    return {
        type: REPOSITORIES_SELECT,
        payload: repository
    };
}
import api from '../Api';

export function search(q) {
    return api.get(`/search/users?q=${q}`);
}

export function get(login) {
    return api.get(`/users/${login}`);
}
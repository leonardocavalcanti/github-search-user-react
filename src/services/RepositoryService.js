import api from '../Api';

export function get(login) {
    return api.get(`/users/${login}/repos`);
}


export const ADD_DOMAIN = 'LOGIN/ADD_DOMAIN';
export const SET_DOMAIN = 'LOGIN/SET_DOMAIN';

export function addDomain(domain) {
    return {
        type: ADD_DOMAIN,
        payload: domain
    }
}

export function setDomain(domain) {
    return {
        type: SET_DOMAIN,
        payload: domain
    }
}
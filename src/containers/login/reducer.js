import { ADD_DOMAIN, SET_DOMAIN } from './actions';

const initialState = {
    domains: ['', 'Add Domain'],
    domain: '',
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_DOMAIN: return { ...state, domains: [...state.domains, action.payload] };
        case SET_DOMAIN: return { ...state, domain: action.payload };
    }
    
    return state;
}
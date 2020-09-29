import { 
    AREGAR_PRODUCTO,
    AREGAR_PRODUCTO_EXITO,
    AREGAR_PRODUCTO_ERROR
} from '../types';

//  Cada reducer tiene su propio state
const initialState = {
    productos: [],
    error: null,
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}
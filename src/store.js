import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(
    reducer,
    compose( applyMiddleware(thunk),

        typeof window === 'object' &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? 
                window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
     )
);

export default store;

/*  lineas 9 - 11 hacen que el programa corra en navegadores que no
tienen instalado redux dev tools y también en los que si */
import { 
    AREGAR_PRODUCTO,
    AREGAR_PRODUCTO_EXITO,
    AREGAR_PRODUCTO_ERROR
} from '../types';

//  Crear nuevos productos
export function crearNuevoProductoAction(producto) {
    return () => {
        console.log(producto);
    }
}
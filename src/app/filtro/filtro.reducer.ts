import { createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';



export const initialState: filtrosValidos = 'todos';

/* Notas: 
    - ¿porque retornamos un nuevo estado?
        porque internamente el Store asigna a la propiedad del estado actuado el nuevo estado devuelto por este reducer

*/
const _filtroReducer = createReducer(initialState,
    on( setFiltro, (state, {filtro}) => filtro ),   // retorna el nuevo estado, state.filtro: filtro
)

export function filtroReducer( state, action ) {
    return _filtroReducer(state, action);
}
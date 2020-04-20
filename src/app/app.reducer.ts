import { ActionReducerMap } from '@ngrx/store';

import { Todo } from './todos/models/todo.model';

import { todoReducer } from './todos/todo.reducer';

import { filtrosValidos } from './filtro/filtro.actions';
import { filtroReducer } from './filtro/filtro.reducer';
// Esto me indica como se encuentra el app state global de la aplicación

// Podemos tener cualquier informacion que tenga sentido darle seguimiento y almacenar en el store: usuarios, carros, etc
export interface AppState {
    todos: Todo[],
    filtro: filtrosValidos
}

/* Con esto el Store va a ir actualizado estos estados constantemente
es como decir: 
    - para el "todos" vas a llamar al todoReducer,
    - para el "filtro" vas a llamar filtroReducer

*/
export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer
}

 

 /* 
    INTERNAMENTE ESTO HACE EL STORE

    this.todo1 = new Todo('comprar');
    this.filtro = '...'
    this.state = {
      todos: [this.todo1, this.todo2]

      aqui si tuviera mas informacion (propiedades las creria)
} */

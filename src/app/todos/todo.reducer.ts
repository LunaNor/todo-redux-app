import { createReducer, on } from '@ngrx/store';
import { crear, toggle, editar, borrar, toggleAll, limpiarCompletados } from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial:Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Vencer a Thanos'),
    new Todo('Comprar traje de Ironman'),
    new Todo('Robar escudo del capitán américa'),
];

const _todoReducer = createReducer(estadoInicial,
    /* Notas
        - recordar que el reducer siempre retorna un nuevo estado
        - no se recomienda hacer push en el estado porque puede mutar el objeto
        - creamos un nuevo arreglo con todos los elementos del state, y añadimos un nuevo en la ultima posición
        - con esto estamos siguiendo el patron redux, siempre debemos buscar retornar UN NUEVO ESTADO y prevenir la mutación de el objeto 
            state actual
        - ¿Por qué no debemos mutar?
    */ 
    on(crear, (state, { texto }) => [...state, new Todo( texto )]),
    on(borrar, (state, {id}) => state.filter(todo => todo.id !== id )),
    on(toggleAll, (state, {completado}) => state.map( todo => {
      return  {
        ...todo,
        completado: completado
      }
    })),
    on(toggle, (state, { id }) => {
        return state.map( todo => {
          if( todo.id === id ) {
            return {
            ...todo,
            completado: !todo.completado 
            }
          } else {
            return todo; 
          }
        }); 
    }),
    on(editar, (state, { id, texto }) => {
      return state.map( todo => {
        if( todo.id === id ) {
          return {
            ...todo,
            texto: texto
          }
        } else {
          return todo; 
        }
      }); 
  }),
  on(limpiarCompletados, state => state.filter( todo => !todo.completado))
)
 
export function todoReducer(state, action) {
    return _todoReducer(state, action);
}
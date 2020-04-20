import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../../filtro/filtro.actions';
import { limpiarCompletados } from '../todo.actions';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  
  todosCompletados: Todo[];
  filtroActual: actions.filtrosValidos = 'todos';
  filtros: actions.filtrosValidos[] = ['todos', 'activos', 'pendientes'];

  pendientes: number = 0;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    //this.store.select('filtro').subscribe( filtro => this.filtroActual = filtro);
    this.store.subscribe( state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter(todo => !todo.completado).length;
      this.todosCompletados = state.todos.filter(todo => todo.completado )
    });
  }

  cambiarFiltro (filtro: actions.filtrosValidos) {
    this.store.dispatch(actions.setFiltro({ filtro }));
  }
  
  limpiarCompletados() {
    this.store.dispatch( limpiarCompletados());
  }
}

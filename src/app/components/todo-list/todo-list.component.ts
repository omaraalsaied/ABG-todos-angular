import { Component, Input} from '@angular/core';
import {Todo} from '../../interfaces/todo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  @Input() todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  onToggleTodo(todo: Todo) {
    todo.done = !todo.done;
    this.todoService.updateTodo(todo).subscribe();
  }

  onDeleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe();
  }
}

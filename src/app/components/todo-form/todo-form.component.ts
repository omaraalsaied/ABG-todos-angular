import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class TodoFormComponent {
  @Output() todoAdded = new EventEmitter<void>();
  todoTitle = '';

  constructor(private todoService: TodoService) {}

  onSubmit() {
    if (this.todoTitle.trim()) {
      const newTodo = {
        title: this.todoTitle,
        done: false,
        createdAt: new Date()
      };

      this.todoService.createTodo(newTodo).subscribe(() => {
        this.todoTitle = '';
        this.todoAdded.emit();
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoService } from './services/todo.service';
import { Todo } from './interfaces/todo';
import {FilterComponent} from './components/filter/filters.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    HeaderComponent,
    SearchBarComponent,
    TodoFormComponent,
    TodoListComponent,
    FilterComponent
  ]
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];
  filteredTodos: Todo[] = [];
  showFilters = false;
  searchTerm = '';
  currentFilter = 'all';

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getAllTodos().subscribe(todos => {
      this.todos = todos;
      this.applyFilters();
    });
  }

  onSearch(term: string) {
    this.searchTerm = term;
    this.applyFilters();
  }

  onFilterChange(filter: string) {
    this.currentFilter = filter;
    this.applyFilters();
  }

  private applyFilters() {
    let filtered = this.todos;

    if (this.searchTerm) {
      filtered = filtered.filter(todo =>
        todo.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    switch (this.currentFilter) {
      case 'active':
        filtered = filtered.filter(todo => !todo.done);
        break;
      case 'completed':
        filtered = filtered.filter(todo => todo.done);
        break;
    }

    this.filteredTodos = filtered;
  }


}

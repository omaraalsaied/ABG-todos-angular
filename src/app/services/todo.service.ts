import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost:8080/api/todos';

  constructor(private http: HttpClient) {}

  getAllTodos(): Observable<Todo[]> {
    console.log("get all todos");
    return this.http.get<Todo[]>(`${this.apiUrl}/`);
  }

  createTodo(todo: Omit<Todo, 'id'>): Observable<Todo> {
    return this.http.post<Todo>(`${this.apiUrl}/`, { ...todo, id: null });
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.apiUrl}/`, todo);
  }

  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


}

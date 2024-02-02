import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DummyTodo, DummyTodosApiResponse } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  /**
   * Store like approach to keep todos object in my service and share them accross components
   */
  todos!: DummyTodo[]; 

  constructor(private http: HttpClient) { }

  findTodos(): Observable<DummyTodo[]> {
    return this.http.get<DummyTodosApiResponse>('https://dummyjson.com/todos').pipe(
      map(data => data.todos) // "deserial"
    )
  } 

  initTodos(): void {
    this.http.get<DummyTodosApiResponse>('https://dummyjson.com/todos').pipe(
      map(data => data.todos) // "deserial"
    ).subscribe(todos => this.todos = todos);
  } 
}

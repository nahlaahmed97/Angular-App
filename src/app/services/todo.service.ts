import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders ({
    'content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
 todosUrl:string='https://jsonplaceholder.typicode.com/users';
  constructor(private http:HttpClient) { }
  
  // Get Todos
  getTodos() : Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl);
  }

  //Delete Todo
  deleteTodo(todo:Todo):Observable<Todo>{
    const url= `${this.todosUrl}/${todo.name}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  // Toggle Completed 
   
  toggleCompleted(todo: Todo):Observable<any>{
    const url = `${this.todosUrl}/${todo.name}`;
    return this.http.put(url, todo, httpOptions);
  }
}

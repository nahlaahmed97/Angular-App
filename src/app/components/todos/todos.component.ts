import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor(private todoService: TodoService) { }
 
  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
     this.todos = todos;
   });
  }
   deleteTodo (todo: Todo) {
     // remove from ui
 this.todos=this.todos.filter(t=> t.name !== todo.name);
    
 // remove from server
 this.todoService.deleteTodo(todo).subscribe();

}
}

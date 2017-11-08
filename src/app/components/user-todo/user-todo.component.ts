import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../services/http.service'


@Component({
  selector: 'ck-user-todo',
  templateUrl: './user-todo.component.html',
  styleUrls: ['./user-todo.component.scss']
})
export class UserTodoComponent implements OnInit {

  closeClicked = true;
  todoTitle = '';
  todoAlert = 'Here';
  showAlert = false;
  constructor(private _httpService: HttpService) { }


  ngOnInit() {
    const todoData = JSON.parse(sessionStorage.getItem('todo-list'));
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (todoData) {
      this._httpService.todoData = todoData;
      if (user) {
        this._httpService.user = user;
      }
    }
  }
  updateTodo(todo) {
    todo.completed = !todo.completed;
    const url = 'https://jsonplaceholder.typicode.com/todos/' + todo.id;
    this._httpService.postData(url, todo).subscribe(res => {
      this._httpService.todoData.map(x => {
        if (x.id === res.id) {
          x = res;
        }
      });
      this.todoAlert = 'Your Todo Item " ' + todo.title + ' " is updated.';
      this.showAlert = true;
    }, () => {
      this.showAlert = true;
      this.todoAlert = 'Your Created Todo Item " ' + todo.title + ' " is updated.';
    });
    this.hideTodoAlert();
  }

  deleteTodo(todo) {
    const url = 'https://jsonplaceholder.typicode.com/todos/' + todo.id;
    this._httpService.deleteData(url, todo).subscribe(res => {
      this._httpService.todoData = this._httpService.todoData.filter(x => {
        return x.id !== todo.id;
      });
      this.todoAlert = 'Your Todo Item " ' + todo.title + ' " is deleted.';
      this.showAlert = true;
    });
    this.hideTodoAlert();
  }
  createTodo() {
    const todo = {
      'userId': this._httpService.user['id'],
      'title': this.todoTitle,
      'completed': false
    }
    const url = 'https://jsonplaceholder.typicode.com/todos';
    this._httpService.createData(url, todo).subscribe(res => {
      const addedTodo = res.json();
      addedTodo.disable = true;
      this.todoTitle = '';
      this.todoAlert = 'Your Todo Item " ' + todo.title + ' " is created.';
      this._httpService.todoData.push(addedTodo);
      this.showAlert = true;
    });
    this.hideTodoAlert();
  }

  hideTodoAlert() {
    setTimeout(() => {
      this.showAlert = false;
    }, 3000);
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service'

@Component({
  selector: 'ck-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  userData = [];
  constructor(private _httpService: HttpService) {
  }

  ngOnInit() {
    this.generateUser();
  }

  viewTodos(user) {
    const url = 'https://jsonplaceholder.typicode.com/todos/?userId=';
    this._httpService.getDataWithParams(url, user.id).subscribe(res => {
      this._httpService.todoData = res.json();
      this._httpService.user = user;
      // CACHE THE TODOS
      sessionStorage.setItem('todo-list', JSON.stringify(this._httpService.todoData));
      sessionStorage.setItem('user', JSON.stringify(this._httpService.user));
    });
  }
  generateUser() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    this._httpService.getData(url).subscribe(res => {
      this.userData = res.json();
    })

  }

}

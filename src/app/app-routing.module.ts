import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCardComponent } from '../app/components/user-card/user-card.component';
import { UserTodoComponent } from '../app/components/user-todo/user-todo.component';
import { AboutMeComponent } from '../app/components/about-me/about-me.component';

const routes: Routes = [
  {
    path: 'users',
    component: UserCardComponent
  },
  {
    path: 'todo-list',
    component: UserTodoComponent
  },
  {
    path: 'me',
    component: AboutMeComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/users',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

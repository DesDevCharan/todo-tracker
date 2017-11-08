import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTodoComponent } from './user-todo.component';
import { Http, HttpModule, BaseRequestOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '../../services/http.service'
import { ClarityModule } from 'clarity-angular';
describe('UserTodoComponent', () => {
  let component: UserTodoComponent;
  let fixture: ComponentFixture<UserTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserTodoComponent],
      imports: [HttpModule, ReactiveFormsModule, FormsModule, ClarityModule.forRoot()],
      providers: [
        HttpService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
          (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        }
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('should create a todo item', () => {
    const spied = spyOn(component, 'createTodo');
    component.createTodo();
    fixture.detectChanges();
    expect(spied.calls.any()).toBeTruthy();
  });
  it('should delete a todo item', () => {
    const todo = {
      'userId': 1,
      'title': 'todoTitle',
      'completed': false
    }
    const spied = spyOn(component, 'deleteTodo');
    component.deleteTodo(todo);
    fixture.detectChanges();
    expect(spied.calls.any()).toBeTruthy();
  });
  it('should update a todo item', () => {
    const todo = {
      'userId': 1,
      'title': 'todoTitle',
      'completed': false
    }
    const spied = spyOn(component, 'updateTodo');
    component.updateTodo(todo);
    fixture.detectChanges();
    expect(spied.calls.any()).toBeTruthy();
  });
});

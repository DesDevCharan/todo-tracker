import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Http, HttpModule, BaseRequestOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserCardComponent } from './user-card.component';
import { PhonePipe } from '../../pipes/phone.pipe';
import { HttpService } from '../../services/http.service'


describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserCardComponent, PhonePipe],
      imports: [HttpModule, ReactiveFormsModule, FormsModule],
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
    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should generate users', () => {
    const spied = spyOn(component, 'generateUser');
    component.generateUser();
    fixture.detectChanges();
    expect(spied.calls.any()).toBeTruthy();
  });

  it('should generate todos for the user', () => {
    const spied = spyOn(component, 'viewTodos');
    const user = {
      'id': 1,
      'name': 'Leanne Graham',
      'username': 'Bret',
      'email': 'Sincere@april.biz',
      'address': {
        'street': 'Kulas Light',
        'suite': 'Apt. 556',
        'city': 'Gwenborough',
        'zipcode': '92998-3874',
        'geo': {
          'lat': '-37.3159',
          'lng': '81.1496'
        }
      },
      'phone': '1-770-736-8031 x56442',
      'website': 'hildegard.org',
      'company': {
        'name': 'Romaguera-Crona',
        'catchPhrase': 'Multi-layered client-server neural-net',
        'bs': 'harness real-time e-markets'
      }
    }
    component.viewTodos(user);
    fixture.detectChanges();
    expect(spied.calls.any()).toBeTruthy();
  });

});

import { TestBed, inject } from '@angular/core/testing';

import { HttpService } from './http.service';

import { Http, HttpModule, BaseRequestOptions, ResponseOptions, Response, XHRBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


describe('HttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
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
    });
  });


  it('should be created', inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));
  it('should call getData and return the list', inject([HttpService, MockBackend], (service: HttpService, mockBE: MockBackend) => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    mockBE.connections.subscribe((connection: MockConnection) => {
      const options = new ResponseOptions({
        body: JSON.stringify({ success: true })
      });
      connection.mockRespond(new Response(options));
    });

    (service.getData(url).subscribe((resp) => {
      expect(resp.json()).toEqual({ success: true });
    }));
  }));


  it('should call getDataWithParams and return the list',
    inject([HttpService, MockBackend], (service: HttpService, mockBE: MockBackend) => {
      const url = 'https://jsonplaceholder.typicode.com/todos/?userId=';
      mockBE.connections.subscribe((connection: MockConnection) => {
        const options = new ResponseOptions({
          body: JSON.stringify({ success: true })
        });
        connection.mockRespond(new Response(options));
      });

      (service.getDataWithParams(url, 1).subscribe((resp) => {
        expect(resp.json()).toEqual({ success: true });
      }));
    }));

  it('should call postData and return the object',
    inject([HttpService, MockBackend], (service: HttpService, mockBE: MockBackend) => {
      const url = 'https://jsonplaceholder.typicode.com/todos/' + 1;
      const todo = {
        'userId': 1,
        'title': 'this.todoTitle',
        'completed': false
      }
      mockBE.connections.subscribe((connection: MockConnection) => {
        const options = new ResponseOptions({
          body: JSON.stringify({ success: true })
        });
        connection.mockRespond(new Response(options));
      });

      (service.postData(url, todo).subscribe((resp) => {
        expect(resp.json()).toEqual({ success: true });
      }));
    }));

  it('should call deleteData and delete the object',
    inject([HttpService, MockBackend], (service: HttpService, mockBE: MockBackend) => {
      const url = 'https://jsonplaceholder.typicode.com/todos/' + 1;
      const todo = {
        'userId': 1,
        'title': 'this.todoTitle',
        'completed': false
      }
      mockBE.connections.subscribe((connection: MockConnection) => {
        const options = new ResponseOptions({
          body: JSON.stringify({ success: true })
        });
        connection.mockRespond(new Response(options));
      });

      (service.deleteData(url, todo).subscribe((resp) => {
        expect(resp.json()).toEqual({ success: true });
      }));
    }));


  it('should call createData and add the object',
    inject([HttpService, MockBackend], (service: HttpService, mockBE: MockBackend) => {
      const url = 'https://jsonplaceholder.typicode.com/todos';
      const todo = {
        'userId': 1,
        'title': 'new todo created',
        'completed': false
      }
      mockBE.connections.subscribe((connection: MockConnection) => {
        const options = new ResponseOptions({
          body: JSON.stringify({ success: true })
        });
        connection.mockRespond(new Response(options));
      });

      (service.createData(url, todo).subscribe((resp) => {
        expect(resp.json()).toEqual({ success: true });
      }));
    }));
});

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { HttpService } from './services/http.service';
import { UserTodoComponent } from './components/user-todo/user-todo.component';
import { ClarityModule } from 'clarity-angular';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PhonePipe } from './pipes/phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    UserTodoComponent,
    AboutMeComponent,
    PhonePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule.forRoot(),
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

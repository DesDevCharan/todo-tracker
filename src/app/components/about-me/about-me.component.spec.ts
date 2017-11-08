import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { AboutMeComponent } from './about-me.component';

describe('AboutMeComponent', () => {
  let component: AboutMeComponent;
  let fixture: ComponentFixture<AboutMeComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should check title of about-me section', () => {
    de = fixture.debugElement.query(By.css('.card-header'));
    el = de.nativeElement;
    expect(el.textContent).toContain('Charanbabu Karnam');
  });

  it('should check link for details in about-me section', () => {
    de = fixture.debugElement.query(By.css('.card-text a'));
    el = de.nativeElement;
    expect(el.textContent).toContain('Check my details here');
  });

  it('should check details in about-me section', () => {
    de = fixture.debugElement.query(By.css('.card-text'));
    el = de.nativeElement;
    expect(el.textContent).toContain('successful professional having expertise in Design, Development and Maintenanc');
  });
});

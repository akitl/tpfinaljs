/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MonFrigoComponent } from './mon-frigo.component';

describe('MonFrigoComponent', () => {
  let component: MonFrigoComponent;
  let fixture: ComponentFixture<MonFrigoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonFrigoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonFrigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

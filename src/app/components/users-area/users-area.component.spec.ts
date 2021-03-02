import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAreaComponent } from './users-area.component';

describe('UsersAreaComponent', () => {
  let component: UsersAreaComponent;
  let fixture: ComponentFixture<UsersAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

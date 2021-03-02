import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAreaFilterComponent } from './users-area-filter.component';

describe('UsersAreaFilterComponent', () => {
  let component: UsersAreaFilterComponent;
  let fixture: ComponentFixture<UsersAreaFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersAreaFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersAreaFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

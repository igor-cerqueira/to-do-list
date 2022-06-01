import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoButtonDeletteAllComponent } from './todo-button-delette-all.component';

describe('TodoButtonDeletteAllComponent', () => {
  let component: TodoButtonDeletteAllComponent;
  let fixture: ComponentFixture<TodoButtonDeletteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoButtonDeletteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoButtonDeletteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutToDoListComponent } from './layout-to-do-list.component';

describe('LayoutToDoListComponent', () => {
  let component: LayoutToDoListComponent;
  let fixture: ComponentFixture<LayoutToDoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutToDoListComponent]
    });
    fixture = TestBed.createComponent(LayoutToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

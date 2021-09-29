import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDeleteDepComponent } from './show-delete-dep.component';

describe('ShowDeleteDepComponent', () => {
  let component: ShowDeleteDepComponent;
  let fixture: ComponentFixture<ShowDeleteDepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDeleteDepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDeleteDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

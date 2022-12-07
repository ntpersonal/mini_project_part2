import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearomizerComponent } from './clearomizer.component';

describe('ClearomizerComponent', () => {
  let component: ClearomizerComponent;
  let fixture: ComponentFixture<ClearomizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearomizerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClearomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

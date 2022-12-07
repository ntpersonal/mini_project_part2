import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VapeComponent } from './vape.component';

describe('VapeComponent', () => {
  let component: VapeComponent;
  let fixture: ComponentFixture<VapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VapeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

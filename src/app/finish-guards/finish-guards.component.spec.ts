import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishGuardsComponent } from './finish-guards.component';

describe('FinishGuardsComponent', () => {
  let component: FinishGuardsComponent;
  let fixture: ComponentFixture<FinishGuardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishGuardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishGuardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduDsePbinComponent } from './produ-dse-pbin.component';

describe('ProduDsePbinComponent', () => {
  let component: ProduDsePbinComponent;
  let fixture: ComponentFixture<ProduDsePbinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduDsePbinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduDsePbinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

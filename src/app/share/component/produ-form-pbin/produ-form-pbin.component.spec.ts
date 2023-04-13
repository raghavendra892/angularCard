import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduFormPbinComponent } from './produ-form-pbin.component';

describe('ProduFormPbinComponent', () => {
  let component: ProduFormPbinComponent;
  let fixture: ComponentFixture<ProduFormPbinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduFormPbinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduFormPbinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

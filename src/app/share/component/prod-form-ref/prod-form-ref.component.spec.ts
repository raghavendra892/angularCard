import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdFormRefComponent } from './prod-form-ref.component';

describe('ProdFormRefComponent', () => {
  let component: ProdFormRefComponent;
  let fixture: ComponentFixture<ProdFormRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdFormRefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdFormRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

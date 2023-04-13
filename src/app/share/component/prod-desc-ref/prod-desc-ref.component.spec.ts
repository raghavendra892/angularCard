import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdDescRefComponent } from './prod-desc-ref.component';

describe('ProdDescRefComponent', () => {
  let component: ProdDescRefComponent;
  let fixture: ComponentFixture<ProdDescRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdDescRefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdDescRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

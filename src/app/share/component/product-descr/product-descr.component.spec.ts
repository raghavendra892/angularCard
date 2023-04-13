import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDescrComponent } from './product-descr.component';

describe('ProductDescrComponent', () => {
  let component: ProductDescrComponent;
  let fixture: ComponentFixture<ProductDescrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDescrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDescrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

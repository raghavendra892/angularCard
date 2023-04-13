import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Icatg, Iproduct } from '../../model/table';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @Output() onaddproduC : EventEmitter<Iproduct> = new EventEmitter<Iproduct>()
  constructor() { }
 
  ngOnInit(): void {
  }
  
   
  onProdadd(pname: HTMLInputElement, pdesc: HTMLInputElement, pcat: Icatg) {
    let obj : Iproduct = {
      pname : pname.value,
      pDesc : pdesc.value,
      pCatg : pcat
    }
    this.onaddproduC.emit(obj)
    pname.value = " "
    pdesc.value = " "
  }

}

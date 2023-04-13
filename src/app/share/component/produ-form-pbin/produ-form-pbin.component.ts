import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Icatg, Iproduct } from '../../model/table';

@Component({
  selector: 'app-produ-form-pbin',
  templateUrl: './produ-form-pbin.component.html',
  styleUrls: ['./produ-form-pbin.component.scss']
})
export class ProduFormPbinComponent implements OnInit {
 @Output() Addnewprod : EventEmitter<Iproduct> = new EventEmitter<Iproduct>()

  ProductNameval! : string;
  ProductDesval ! : string;
  constructor() { }

  ngOnInit(): void {
  }
  onProductADD(pcat:Icatg){
    let obj : Iproduct = {
      pname : this.ProductNameval,
      pDesc : this.ProductDesval,
      pCatg : pcat
    }
    this.Addnewprod.emit(obj)
    this.ProductNameval = " "
    this.ProductDesval = " "
  }
}

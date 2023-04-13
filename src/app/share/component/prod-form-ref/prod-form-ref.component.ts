import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Icatg, Iproduct } from '../../model/table';

@Component({
  selector: 'app-prod-form-ref',
  templateUrl: './prod-form-ref.component.html',
  styleUrls: ['./prod-form-ref.component.scss']
})
export class ProdFormRefComponent implements OnInit {
@Output()  onaddproduC : EventEmitter<Iproduct> = new EventEmitter<Iproduct>()

@ViewChild("ProductName") productEle ! : ElementRef
@ViewChild("ProductDes") prodDescEle ! : ElementRef
  constructor() { }

  ngOnInit(): void {
  }
  onProdadD(pcat : Icatg){
    let obj : Iproduct ={
      pname : this.prodDescEle.nativeElement.value,
      pDesc : this.prodDescEle.nativeElement.value,
      pCatg : pcat
    }

    this.onaddproduC.emit(obj)
    this.prodDescEle.nativeElement.value = " "
    this.prodDescEle.nativeElement.value = " "
  }
}

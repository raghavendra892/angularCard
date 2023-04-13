import { Component } from '@angular/core';
import { Icatg, Iproduct, Istd } from './share/model/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular10lectur';


  onproductHanD(prod:Iproduct){
    this.productArraY.push(prod)
  }


  productsArraY : Array<Iproduct> =[
    {
      pname : "Nokia",
      pDesc : "Nokia F50",
      pCatg : "Product"
    }
   ]

   onAddnewprod(prod:any){
    this.productsArraY.push(prod)
   }

  productArraY : Array<Iproduct> =[
    {
      pname : "Samsung",
      pDesc : "samsung M33",
      pCatg : "Catlog"
    }
   ]






  

   onproductHand(prod:Iproduct){
    this.productArray.push(prod)
  }
//**** */
   productArray : Array<Iproduct> =[
    {
      pname : "Hp",
      pDesc : "HP Pavillion Laptop",
      pCatg : "Catlog"
    }
   ]
   



//////task 1 in 11 lectu
 productArraynew : Array<Iproduct> =[
  {
    pname : "Asus",
    pDesc : "Asus-Rog 5s",
    pCatg : "Catlog"
  }
 ]

 addProductDetails(pname: HTMLInputElement, Pdes : HTMLInputElement, catg : Icatg){
  let obj : Iproduct = {
    pname : pname.value,
    pDesc : Pdes.value,
    pCatg : catg
  }
  this.productArraynew.push(obj)
  pname.value = " "
  Pdes.value = " "
  console.log(this.productArraynew)
 }














    // stdArray: Array<Istd> = [
    //   {
    //     fname : "jhon",
    //     lname : "doe",
    //     email : "Jd123@gmail.com",
    //     contact : 1233345464
    //   }
    // ];
  
    // onstdadd(std:Istd){

    // }
}


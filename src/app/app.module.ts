import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './share/component/form/form.component';
import { TableComponent } from './share/component/table/table.component';

import { ProductDescrComponent } from './share/component/product-descr/product-descr.component';
import { ProductFormComponent } from './share/component/product-form/product-form.component';
import { ProdFormRefComponent } from './share/component/prod-form-ref/prod-form-ref.component';
import { ProdDescRefComponent } from './share/component/prod-desc-ref/prod-desc-ref.component';
import { ProduFormPbinComponent } from './share/component/produ-form-pbin/produ-form-pbin.component';
import { ProduDsePbinComponent } from './share/component/produ-dse-pbin/produ-dse-pbin.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent,
    
    ProductDescrComponent,
         ProductFormComponent,
         ProdFormRefComponent,
         ProdDescRefComponent,
         ProduFormPbinComponent,
         ProduDsePbinComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

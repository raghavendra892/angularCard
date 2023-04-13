import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from '../../model/table';

@Component({
  selector: 'app-product-descr',
  templateUrl: './product-descr.component.html',
  styleUrls: ['./product-descr.component.scss']
})
export class ProductDescrComponent implements OnInit {
 @Input() cardDescript ! : Array<Iproduct>
  constructor() { }

  ngOnInit(): void {
  }

}

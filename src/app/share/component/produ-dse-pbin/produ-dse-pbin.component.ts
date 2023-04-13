import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from '../../model/table';

@Component({
  selector: 'app-produ-dse-pbin',
  templateUrl: './produ-dse-pbin.component.html',
  styleUrls: ['./produ-dse-pbin.component.scss']
})
export class ProduDsePbinComponent implements OnInit {
 @Input() ProductInfo ! : Array<Iproduct>
  constructor() { }

  ngOnInit(): void {
  }

}

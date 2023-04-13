import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from '../../model/table';

@Component({
  selector: 'app-prod-desc-ref',
  templateUrl: './prod-desc-ref.component.html',
  styleUrls: ['./prod-desc-ref.component.scss']
})
export class ProdDescRefComponent implements OnInit {
  @Input() cardDescripT ! : Array<Iproduct>
  constructor() { }

  ngOnInit(): void {
  }

}

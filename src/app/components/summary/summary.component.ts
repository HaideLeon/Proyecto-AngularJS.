import { Component, Input } from '@angular/core';

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})

export class SummaryComponent{
  @Input() stock: any;

  isNEgative(){
    return(this.stock && this.stock.change < 0 );
  }

  inPosotive(){
    return (this.stock && this.stock.change > 0)
  }

}
 

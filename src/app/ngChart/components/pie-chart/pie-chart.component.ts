import { Component, OnInit, Input, ElementRef, Renderer2, ViewChild, AfterViewInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit, AfterViewInit {
  @Input() data: any;
  @ViewChild('pieCircle') circle: ElementRef;
  @ViewChild('tooltip') tooltip : ElementRef;
  constructor(private _eleRef: ElementRef, private _render: Renderer2) {
   }
  setPieChart():void {
    let circumfrence = 2*(22/7)*this.circle.nativeElement.getAttribute('r');
    let result = (this.data.overDue*circumfrence/100) + ' ' + circumfrence;
    this._render.setStyle(this.circle.nativeElement, 'strokeDasharray', result);
    this._render.setStyle(this.circle.nativeElement, 'stroke', 'url(#pattern-line)');
  }
  displayTooltip():void {
    /**bind mouseover event to show tooltio */
    this._render.listen(this.circle.nativeElement, 'mouseover', ($event)=>{
      console.log('>>>'+$event.pageX+'px');
      console.log('>>>'+this.circle.nativeElement.offsetHeight+'px');
      this._render.setStyle(this.tooltip.nativeElement, 'left', ($event.pageX)+'px');
      this._render.setStyle(this.tooltip.nativeElement, 'top', ($event.pageY-50)+'px');
      this._render.setStyle(this.tooltip.nativeElement, 'opacity', 1);
     })
    /**bind mouseover event to show tooltio */
    this._render.listen(this.circle.nativeElement, 'mouseout', $event=>{
      this._render.setStyle(this.tooltip.nativeElement, 'opacity', 0);
    })
  }
  ngOnInit() {
    console.log(this.data)
  }
  ngAfterViewInit() {
    console.log(this.circle)
    this.setPieChart()
    this.displayTooltip();
  }

}

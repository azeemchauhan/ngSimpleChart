import { NgModule } from '@angular/core';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';

@NgModule({
    declarations : [ BarChartComponent, PieChartComponent ],
    exports: [ BarChartComponent, PieChartComponent ],
    providers : []
})
export class NgChartModule {

}
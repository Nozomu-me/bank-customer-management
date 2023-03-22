import { Component, Input } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexResponsive,
} from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  @Input() totalDeposit: number | undefined;
  @Input() totalCustomersNumber: number | undefined;
  @Input() chart: any | undefined;

  chartSeries: ApexNonAxisChartSeries = [];

  chartDetails: ApexChart = {
    type: 'pie',
    toolbar: {
      show: true,
    },
    height: 400,
    width: 400,
  };
  chartLabels = [
    'Checking',
    'Savings',
    'Money Market Account',
    'Certificate Of Deposit',
  ];
  responsive: ApexResponsive = {
    options: {},
  };
}

import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { MocaServiceService } from 'src/app/services/moca-service.service';
import { ShortNumberPipe } from 'src/app/pipes/short-number.pipe';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  coins:any;
  currencies = ["USD", "KRW", "SGD", "HKD"];
  selectedCurrency:string = "USD"; 
  isDataLoaded:boolean = false;
  exchanges: any;
  cryptoCurrency: boolean = true;
  
  constructor(private mocaService: MocaServiceService, private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.selectedCurrency = 'USD';
    this.getCryptoCurrencies();
  }

  onCurrencyChange(item:any){
    this.selectedCurrency = item.currentTarget.value;
    this.getCryptoCurrencies();
  }

  getCryptoCurrencies(){
    this.cryptoCurrency = true;
    this.isDataLoaded = false;
    this.mocaService.getCryptoCurrencies(this.selectedCurrency).subscribe(data=>{
      this.isDataLoaded = true;
      this.coins = data;
    });
  }

  sortColumn(event:any, colName:string){
    let element = this.element.nativeElement.querySelector('#' + colName);
    let allElement = this.element.nativeElement.querySelectorAll('.arrow');
    let sortType = '';
    let clsElement = element.className === undefined || element.className === null ? '' : element.className;
    if (allElement !== null && allElement !== undefined) {
      allElement.forEach((e: any) => {
        this.renderer.removeClass(e, 'arrow-down');
        this.renderer.removeClass(e, 'arrow-up');
      });
    }

    if (clsElement === 'arrow') {
      sortType = 'asc';
      this.renderer.addClass(element, 'arrow-up');
      this.coins.coins.sort((a:any, b:any) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0);
    } else if (clsElement === 'arrow arrow-up') {
        this.renderer.removeClass(element, 'arrow-up');
        this.renderer.addClass(element, 'arrow-down');
        this.coins.coins.sort((a:any, b:any) => a[colName] < b[colName] ? 1 : a[colName] > b[colName] ? -1 : 0);
    } else if (clsElement == 'arrow arrow-down') {
        this.renderer.addClass(element, 'arrow-up');
        this.renderer.removeClass(element, 'arrow-down');
        this.coins.coins.sort((a:any, b:any) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0);
    }
  }

  getExchanges(){
    this.cryptoCurrency = false;
    this.isDataLoaded = false;
    this.mocaService.getExchanges(this.selectedCurrency).subscribe(data=>{
      this.isDataLoaded = true;
      this.exchanges = data;
    });
  }
}

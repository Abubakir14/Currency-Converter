import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Employee } from './employee';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})

export class SelectComponent implements OnInit{
    employee: Employee[] = [];
    employ: Employee[] = [];
    response: any

    FirstPrice: any
    SecondPrice: any
    FirstAmount: any
    SecondAmount: any
    SecondInput: any;
    FirstInput: any;
    EurUsd: any;
    EurUah: any;
    UsdUah: any;

    ngOnInit() {
        this.employee = [
            { Id: 1, Name: 'USD' },
            { Id: 2, Name: 'EAH' },
            { Id: 3, Name: 'EUR' }
        ],
        this.employ = [
            { Id: 1, Name: 'EUR' },
            { Id: 2, Name: 'USD' },
            { Id: 3, Name: 'EAH' }
        ]
    }
    
    
    
    
    constructor(private http: HttpClient) {
        
    }
    curses() {
        this.http.get('https://www.cbr-xml-daily.ru/daily_json.js')
        .subscribe((response)=>{
            this.response = response
            JSON.stringify(response)
        })
        this.EurUsd = this.response.Valute.EUR.Value.toFixed(2) / this.response.Valute.USD.Value.toFixed(2)
        this.EurUah = this.response.Valute.EUR.Value.toFixed(2) / this.response.Valute.UAH.Value.toFixed(2)
        this.UsdUah = this.response.Valute.USD.Value.toFixed(2) / this.response.Valute.UAH.Value.toFixed(2)
    }


    CurrencyHandler(event: any) {
        if(event.target.value === '1') {
            this.SecondInput = this.EurUsd * this.FirstAmount
        } if(event.target.value === '2') {
            this.SecondInput = this.UsdUah * this.FirstAmount
        } if(event.target.value === '3') {
            this.SecondInput = this.EurUah * this.FirstAmount
        }
    }

    CurrenCyHandler(event: any) {
        if(event.target.value === '1') {
            this.FirstInput = this.EurUsd * this.SecondAmount
        } if(event.target.value === '2') {
            this.FirstInput = this.EurUah * this.SecondAmount
        } if(event.target.value === '3') {
            this.FirstInput = this.UsdUah * this.SecondAmount
        }
    }

    // EmpFirstIdHandler(event: any) {
    //     if(event.target.value === '1') {
    //         this.FirstPrice = this.EurUsd * this.FirstAmount
    //     } if(event.target.value === '2') {
    //         this.FirstPrice = this.UsdUah * this.FirstAmount
    //     } if(event.target.value === '3') {
    //         this.FirstPrice = this.FirstAmount * this.FirstAmount
    //     }
    //     // console.log(this.FirstAmount)
    // }

    // EmpSecondIdHandler(event: any) {
    //     if(event.target.value === '1') {
    //         this.SecondPrice = this.EurUsd * this.SecondAmount
    //     } if(event.target.value === '2') {
    //         this.SecondPrice = this.SecondAmount * this.SecondAmount
    //     } if(event.target.value === '3') {
    //         this.SecondPrice = this.EurUah * this.SecondAmount
    //     }
    // }


    inputFirstHandler(event: any) {
        this.curses()
        this.FirstAmount = event.target.value

    }

    inputSecondHandler(event: any) {
        this.curses()
        this.SecondAmount = event.target.value
    }
}
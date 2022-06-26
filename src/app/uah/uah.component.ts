import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-uah',
  templateUrl: './uah.component.html',
  styleUrls: ['./uah.component.css']
})
export class UahComponent {
  response: any

  imgUrl: string = 'https://scarabane.com/img/2017/icons/rotation-icon.jpg' 
    constructor(private http: HttpClient) {
        
    }
    curses() {
        this.http.get('https://www.cbr-xml-daily.ru/daily_json.js')
        .subscribe((response)=>{
            this.response = response
            JSON.stringify(response)
        })
    }
}

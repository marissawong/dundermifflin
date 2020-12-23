import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: any[] = [
    {
        title: 'Pentel 203 - Turquoise',
        type: 'pentel P203 pencil home office study',
        brand: 'Pentel',
        model: 'pentel 203',
        price: 3.90.toFixed(2)
    },
    {
        title: 'Pentel 203 - Yellow',
        type: 'pentel P203 pencil home office study',
        brand: 'Pentel',
        model: 'pentel 203',
        price: 3.90.toFixed(2)
    },
    {
        title: 'Pentel 205 - Turquoise',
        type: 'pentel P205 pencil home office study',
        brand: 'Pentel',
        model: 'pentel 205',
        price: 4.50.toFixed(2)
    },
    {
        title: 'Pentel 205 - Yellow',
        type: 'pentel P205 pencil home office study',
        brand: 'Pentel',
        model: 'pentel 205',
        price: 4.50.toFixed(2)
    },
    {
        title: 'Pentel 207 - Turquoise',
        type: 'pentel P207 pencil home office study',
        brand: 'Pentel',
        model: 'pentel 207',
        price: 5.10.toFixed(2)
    },
    {
        title: 'Pentel 207 - Yellow',
        type: 'pentel P207 pencil home office study',
        brand: 'Pentel',
        model: 'pentel 207',
        price: 5.10.toFixed(2)
    }    
]
  constructor() { }

  ngOnInit(): void {
  }

}

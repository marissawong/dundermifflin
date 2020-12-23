import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() title: string;
  @Input() price: number;
  @Input() brand: string;
  @Input() image: string;
  @Output() cartChange: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  addToCart(): void {
    this.cartChange.emit(this.price);
  }

}

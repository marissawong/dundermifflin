import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  @Input() data: any[];
  @Input() keyword: any[];
  @Input() sub: string;
  @Input() title: string;
  collectionResults: any[];
  constructor() {
    if (!this.title) { this.title = 'recommended for you' };
    if (!this.sub) { this.sub = 'a special collection for you' };
  }

  ngOnInit(): void {
  }

}

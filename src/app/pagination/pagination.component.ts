import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  currentPage: number = 0;
  maxPage: number = 10;

  constructor() { }

  ngOnInit() {
  }

  pageForward() {
    if(this.currentPage < this.maxPage) {
      this.currentPage++;
    }
  };

  pageBack() {
    if(this.currentPage > 0) {
      this.currentPage--;
    }
  };
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() currentPage: number;
  @Input() maxPage: number;
  @Output() backClick = new EventEmitter();
  @Output() nextClick = new EventEmitter();
}

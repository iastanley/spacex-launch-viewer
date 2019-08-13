import { Component, OnInit } from '@angular/core';

import { LaunchesService } from '../launches.service';

@Component({
  selector: 'app-launch-controller',
  templateUrl: './launch-controller.component.html',
  styleUrls: ['./launch-controller.component.css']
})
export class LaunchControllerComponent implements OnInit {
  loading: boolean = true;
  currentPage: number;
  maxPage: number;
  sortOrder: string;
  errorMsg: string;
  launches = [];

  constructor(
    private launchesService: LaunchesService
  ) { }

  ngOnInit() {
    this.getLaunches();
  }

  getLaunches() {
    this.loading = true;
    this.launchesService.getLaunches().subscribe(
      launches => {
        this.launches = launches.body;
      },
      error => {
        this.errorMsg = error;
        this.loading = false;
      },
      () => {
        this.loading = false;
        this.updatePageControls();
      });
  }

  updatePageControls() {
    this.currentPage = this.launchesService.getOffset() / this.launchesService.getLimit() + 1;
    this.maxPage = Math.ceil(this.launchesService.getTotal() / this.launchesService.getLimit());
    this.sortOrder = this.launchesService.getSortOrder();
  }

  onBackClick() {
    this.launchesService.goToPrevPage();
    this.getLaunches();
  }

  onNextClick() {
    this.launchesService.goToNextPage();
    this.getLaunches();
  }

  onToggleSort(sortOrder) {
    this.launchesService.setSortOrder(sortOrder);
    this.getLaunches();
  }
}

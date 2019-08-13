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
    this.updatePageControls();
    this.getLaunches();
  }

  getLaunches() {
    this.loading = true;
    this.launchesService.getLaunches().subscribe(
      launches => {
        this.launches = launches;
      },
      error => {
        this.errorMsg = error;
        this.loading = false;
      },
      () => {
        this.loading = false;
      });
  }

  updatePageControls() {
    this.currentPage = this.launchesService.getOffset() / this.launchesService.getLimit() + 1;
    this.maxPage = Math.ceil(this.launchesService.getTotal() / this.launchesService.getLimit());
    this.sortOrder = this.launchesService.getSortOrder();
  }

  onBackClick() {
    this.launchesService.goToPrevPage();
    this.updatePageControls();
    this.getLaunches();
  }

  onNextClick() {
    this.launchesService.goToNextPage();
    this.updatePageControls();
    this.getLaunches();
  }

  onToggleSort(sortOrder) {
    this.launchesService.setSortOrder(sortOrder);
    this.updatePageControls();
    this.getLaunches();
  }
}

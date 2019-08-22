import { Component, Input } from '@angular/core';

import { Launch } from '../launch';

@Component({
  selector: 'app-launch-table',
  templateUrl: './launch-table.component.html',
  styleUrls: ['./launch-table.component.css']
})
export class LaunchTableComponent {
  @Input() launches: Launch[];
  @Input() loading: boolean;
  @Input() sortOrder: string;
  @Input() errorMsg: string;

  openPressLink(pressLink: string) {
    if (pressLink) {
      window.open(pressLink);
    }

  }
}

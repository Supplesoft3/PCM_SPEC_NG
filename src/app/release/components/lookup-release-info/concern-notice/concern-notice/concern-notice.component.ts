import { Component } from '@angular/core';
import {
  FindFirmWare,
  FirmWareReport,
} from '../../../../utils/models/concern-notice.model';

@Component({
  selector: 'app-concern-notice',
  templateUrl: './concern-notice.component.html',
  styleUrl: './concern-notice.component.scss',
})
export class ConcernNoticeComponent {
  findFrimWare: FindFirmWare = {};
  firmWareReport: Array<FirmWareReport> = new Array();

  tempShowTable: boolean = false;

  onClickSearch() {
    if (
      (this.findFrimWare?.wersConcerns === null ||
        typeof this.findFrimWare.wersConcerns === 'undefined' ||
        this.findFrimWare.wersConcerns === '') &&
      (this.findFrimWare?.wersNotice === null ||
        typeof this.findFrimWare?.wersNotice === 'undefined' ||
        this.findFrimWare.wersNotice === '')
    ) {
      this.tempShowTable = false;
    } else {
      this.tempShowTable = true;
    }
  }
}

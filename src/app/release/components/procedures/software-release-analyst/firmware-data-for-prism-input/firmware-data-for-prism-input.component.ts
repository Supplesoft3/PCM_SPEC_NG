import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ReleaseService } from '../../../../utils/services/release.service';
import { FindProductionPartNumberModel } from '../../../../utils/models/find-production-part-number-model';

@Component({
  selector: 'app-firmware-data-for-prism-input',
  templateUrl: './firmware-data-for-prism-input.component.html',
  styleUrl: './firmware-data-for-prism-input.component.scss'
})
export class FirmwareDataForPrismInputComponent {
  constructor(private toastr: ToastrService, private releaseService: ReleaseService) { }
  findProductionPartNumberData: FindProductionPartNumberModel= new FindProductionPartNumberModel();

}

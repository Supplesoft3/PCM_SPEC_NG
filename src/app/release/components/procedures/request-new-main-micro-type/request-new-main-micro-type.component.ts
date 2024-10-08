import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AddRequestMainMicroModel } from '../../../utils/models/Request-main-micro';

@Component({
  selector: 'app-request-new-main-micro-type',
  templateUrl: './request-new-main-micro-type.component.html',
  styleUrl: './request-new-main-micro-type.component.scss',
})
export class RequestNewMainMicroTypeComponent implements OnInit {
  constructor(private toastr: ToastrService) {}

  addRequestMainMicroData: AddRequestMainMicroModel = new AddRequestMainMicroModel();
  moduleTypeOptions: string[] = ['One', 'Two', 'Three'];

  filteredOptionsModuleType: Array<any> = new Array();

  ngOnInit() {
    this.filterOptions();
  }

  filterOptions() {
    if (this.addRequestMainMicroData.module_type) {
      this.filteredOptionsModuleType = this.moduleTypeOptions.filter((option) =>
        option
          .toLowerCase()
          .includes(
            String(this.addRequestMainMicroData.module_type.toLowerCase())
          )
      );
    } else {
      this.filteredOptionsModuleType = this.moduleTypeOptions;
    }
  }

  cancelSubmit() {
    this.addRequestMainMicroData = new AddRequestMainMicroModel();
  }
}

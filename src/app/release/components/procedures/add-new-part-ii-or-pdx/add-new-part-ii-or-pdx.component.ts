import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ReleaseService } from '../../../utils/services/release.service';
import { AddPartIIModel } from '../../../utils/models/part-II';

@Component({
  selector: 'app-add-new-part-ii-or-pdx',
  templateUrl: './add-new-part-ii-or-pdx.component.html',
  styleUrl: './add-new-part-ii-or-pdx.component.scss'
})
export class AddNewPartIIOrPdxComponent implements OnInit {
  constructor(private toastr: ToastrService, private releaseService : ReleaseService) {}
  
  addPartIIData: AddPartIIModel = new AddPartIIModel();
  moduleTypeOptions: string[] = ['One', 'Two', 'Three'];
  microTypeOptions: string[] = ['One', 'Two', 'Three'];

  filteredOptionsModuleType: Array<any> = new Array();
  filteredOptionsMicroType: Array<any> = new Array();

  ngOnInit() {
    this.filterOptions('module_type');
    this.filterOptions('micro_type');
  }

  filterOptions(changeOpt: String) {
    if (changeOpt === 'module_type') {
      if (this.addPartIIData.module_type) {
        this.filteredOptionsModuleType = this.moduleTypeOptions.filter(
          (option) =>
            option
              .toLowerCase()
              .includes(String(this.addPartIIData.module_type.toLowerCase()))
        );
      } else {
        this.filteredOptionsModuleType = this.moduleTypeOptions;
      }
    }
    if (changeOpt === 'micro_type') {
      if (this.addPartIIData.micro_type) {
        this.filteredOptionsMicroType = this.microTypeOptions.filter((option) =>
          option
            .toLowerCase()
            .includes(String(this.addPartIIData.micro_type.toLowerCase()))
        );
      } else {
        this.filteredOptionsMicroType = this.microTypeOptions;
      }
    }
  }

  cancelSubmit() {
    this.addPartIIData = new AddPartIIModel();
  }
}


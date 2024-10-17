import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ReleaseService } from '../../../utils/services/release.service';
import { AddSblModel } from '../../../utils/models/sbl.model';

@Component({
  selector: 'app-add-sbl',
  templateUrl: './add-sbl.component.html',
  styleUrl: './add-sbl.component.scss',
})
export class AddSblComponent implements OnInit {
  constructor(private toastr: ToastrService, private releaseService : ReleaseService) {}
  
  addSBLData: AddSblModel = new AddSblModel();
  supplierOptions: string[] = ['One', 'Two', 'Three'];
  moduleTypeOptions: string[] = ['One', 'Two', 'Three'];
  microTypeOptions: string[] = ['One', 'Two', 'Three'];

  filteredOptionsSupplier: Array<any> = new Array();
  filteredOptionsModuleType: Array<any> = new Array();
  filteredOptionsMicroType: Array<any> = new Array();

  ngOnInit() {
    this.filterOptions('supplier');
    this.filterOptions('module_type');
    this.filterOptions('micro_type');
  }

  filterOptions(changeOpt: String) {
    if (changeOpt === 'supplier') {
      if (this.addSBLData.supplier) {
        this.filteredOptionsSupplier = this.supplierOptions.filter((option) =>
          option
            .toLowerCase()
            .includes(String(this.addSBLData.supplier.toLowerCase()))
        );
      } else {
        this.filteredOptionsSupplier = this.supplierOptions;
      }
      console.log(
        'this.filteredOptionsSupplier : ',
        this.filteredOptionsSupplier
      );
    }
    if (changeOpt === 'module_type') {
      if (this.addSBLData.module_type) {
        this.filteredOptionsModuleType = this.moduleTypeOptions.filter(
          (option) =>
            option
              .toLowerCase()
              .includes(String(this.addSBLData.module_type.toLowerCase()))
        );
      } else {
        this.filteredOptionsModuleType = this.moduleTypeOptions;
      }
    }
    if (changeOpt === 'micro_type') {
      if (this.addSBLData.micro_type) {
        this.filteredOptionsMicroType = this.microTypeOptions.filter((option) =>
          option
            .toLowerCase()
            .includes(String(this.addSBLData.micro_type.toLowerCase()))
        );
      } else {
        this.filteredOptionsMicroType = this.microTypeOptions;
      }
    }
  }

  validateSBLData() {
    const {
      release_type,
      micro_type,
      module_type,
      description,
      supplier,
      lead_my_program,
      current_part_number,
    } = this.addSBLData;
    if (
      release_type === null ||
      typeof release_type === 'undefined' ||
      release_type === '' ||
      module_type === null ||
      typeof module_type === 'undefined' ||
      module_type === '' ||
      description === null ||
      typeof description === null ||
      description === ''
    ) {
      this.toastr.error(
        "Field marked with '*' is important please fill the field and try again"
      );
      return false;
    }
    if (
      release_type === 'new_sbl' &&
      (micro_type === null ||
        typeof micro_type === 'undefined' ||
        micro_type === '' ||
        supplier === null ||
        typeof supplier === 'undefined' ||
        supplier === '' ||
        lead_my_program === null ||
        typeof lead_my_program === 'undefined' ||
        lead_my_program === '')
    ) {
      this.toastr.error(
        "Field marked with '*' is important please fill the field and try again"
      );
      return false;
    } else if (
      release_type === 'replace_sbl' &&
      (current_part_number === null ||
        typeof current_part_number === 'undefined' ||
        current_part_number === '')
    ) {
      this.toastr.error(
        "Field marked with '*' is important please fill the field and try again"
      );
      return false;
    }
    return true;
  }

  addSBL() {
    if (this.validateSBLData()) {
      let dataToSend = {...this.addSBLData};
      if(dataToSend.release_type === "new_sbl"){
        dataToSend = {...dataToSend, current_part_number : ""};
      }
      if(this.addSBLData.release_type === "replace_sbl"){
        dataToSend = {...dataToSend, micro_type : "", lead_my_program : "", supplier : ""};
      }
      this.releaseService.addSbl(dataToSend).subscribe(data => {
        if(data?.id){
          this.toastr.success("SBL added successfully");
          this.cancelSubmit();
        }else{
          this.toastr.success("Error while adding SBL");
        }
      })
    }
  }

  cancelSubmit() {
    this.addSBLData = new AddSblModel();
  }
}

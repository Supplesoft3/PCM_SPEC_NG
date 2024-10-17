import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ReleaseService } from '../../../utils/services/release.service';
import { AddPblModel } from '../../../utils/models/pbl.model';

@Component({
  selector: 'app-add-pbl',
  templateUrl: './add-pbl.component.html',
  styleUrl: './add-pbl.component.scss'
})
export class AddPblComponent implements OnInit {
  constructor(private toastr: ToastrService, private releaseService: ReleaseService) { }

  addPBLData: AddPblModel = new AddPblModel();
  moduleTypeOptions: string[] = ['One', 'Two', 'Three'];
  filteredOptionsModuleType: Array<any> = new Array();

  ngOnInit() {
    this.filterOptions();
    this.addPBLData.release_type = 'replace_pbl';
  }

  filterOptions() {
      if (this.addPBLData.module_type) {
        this.filteredOptionsModuleType = this.moduleTypeOptions.filter(
          (option) =>
            option
              .toLowerCase()
              .includes(String(this.addPBLData.module_type.toLowerCase()))
        );
      } else {
        this.filteredOptionsModuleType = this.moduleTypeOptions;
      }
  }

  // validatePBLData() {
  //   const {
  //     release_type,
  //     module_type,
  //     current_pbl,
  //     new_pbl
  //   } = this.addPBLData;
  //   if (
  //     release_type === null ||
  //     typeof release_type === 'undefined' ||
  //     release_type === '' ||
  //     module_type === null ||
  //     typeof module_type === 'undefined' ||
  //     module_type === '' ||
  //     description === null ||
  //     typeof description === null ||
  //     description === ''
  //   ) {
  //     this.toastr.error(
  //       "Field marked with '*' is important please fill the field and try again"
  //     );
  //     return false;
  //   }
  //   if (
  //     release_type === 'new_pbl' &&
  //     (micro_type === null ||
  //       typeof micro_type === 'undefined' ||
  //       micro_type === '' ||
  //       supplier === null ||
  //       typeof supplier === 'undefined' ||
  //       supplier === '' ||
  //       lead_my_program === null ||
  //       typeof lead_my_program === 'undefined' ||
  //       lead_my_program === '')
  //   ) {
  //     this.toastr.error(
  //       "Field marked with '*' is important please fill the field and try again"
  //     );
  //     return false;
  //   } else if (
  //     release_type === 'replace_pbl' &&
  //     (current_part_number === null ||
  //       typeof current_part_number === 'undefined' ||
  //       current_part_number === '')
  //   ) {
  //     this.toastr.error(
  //       "Field marked with '*' is important please fill the field and try again"
  //     );
  //     return false;
  //   }
  //   return true;
  // }
  // addPBL() {
  //   if (this.validatePBLData()) {
  //     let dataToSend = { ...this.addPBLData };
  //     if (dataToSend.release_type === "new_pbl") {
  //       dataToSend = { ...dataToSend, current_part_number: "" };
  //     }
  //     if (this.addPBLData.release_type === "replace_pbl") {
  //       dataToSend = { ...dataToSend, micro_type: "", lead_my_program: "", supplier: "" };
  //     }
  //     this.releaseService.addPbl(dataToSend).subscribe(data => {
  //       if (data?.id) {
  //         this.toastr.success("SBL added successfully");
  //         this.cancelSubmit();
  //       } else {
  //         this.toastr.success("Error while adding SBL");
  //       }
  //     })
  //   }
  // }

  cancelSubmit() {
    this.addPBLData = new AddPblModel();
  }


}

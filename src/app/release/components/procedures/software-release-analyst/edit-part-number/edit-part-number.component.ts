import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ReleaseService } from '../../../../utils/services/release.service';
import { FindPartNumberModel } from '../../../../utils/models/find-part-number-model';


@Component({
  selector: 'app-edit-part-number',
  templateUrl: './edit-part-number.component.html',
  styleUrl: './edit-part-number.component.scss'
})
export class EditPartNumberComponent implements OnInit {
  constructor(private toastr: ToastrService, private releaseService: ReleaseService) { }
 
  //addPBLData: AddPblModel = new AddPblModel();
  findPartNumberData: FindPartNumberModel= new FindPartNumberModel();
  moduleTypeOptions: string[] = ['AWDCH Assembly - Ford', 'AWDCH Assembly - Supplier', 'BCCM Assembly - Release','BCCM Hardware','BCCMB Assembly','BCCMB Hardware'];
  filteredOptionsModuleType: Array<any> = new Array();
  onSelectChange(event: any) {
    const select = event.target;
    const options = select.options;
    
    let allSelected = options[0].selected; // Check if "All" is selected
    let selectedCount = 0; // To count how many individual options are selected (excluding "All")
    
    // Check for individual option selections and count them
    for (let i = 1; i < options.length; i++) {
      if (options[i].selected) {
        selectedCount++;
      }
    }

    // If "All" is selected, select all other options
    if (allSelected) {
      for (let i = 1; i < options.length; i++) {
        options[i].selected = true;
      }
    } 
    // If an individual option is deselected, deselect the "All" option
    else if (selectedCount !== options.length - 1) {
      options[0].selected = false;
    }

    // If all individual options are selected, mark "All" as selected
    if (selectedCount === options.length - 1) {
      options[0].selected = true;
    }
  }


  ngOnInit() {
    this.filterOptions();
    this.findPartNumberData.release_type = 'find_partNumber';
    
  }

  filterOptions() {
    if (this.findPartNumberData.module_type) {
      this.filteredOptionsModuleType = this.moduleTypeOptions.filter(
        (option) =>
          option
            .toLowerCase()
            .includes(String(this.findPartNumberData.module_type.toLowerCase()))
      );
    } else {
      this.filteredOptionsModuleType = this.moduleTypeOptions;
    }
}

}

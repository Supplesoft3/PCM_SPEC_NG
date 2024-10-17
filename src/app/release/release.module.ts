import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';

import { ReleaseRoutingModule } from './release-routing.module';
import { RouterModule } from '@angular/router';
import { ReleaseComponent } from './release.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReleaseSidebarComponent } from './components/release-sidebar/release-sidebar.component';
import { AddSblComponent } from './components/procedures/add-sbl/add-sbl.component';
import { AddPblComponent } from './components/procedures/add-pbl/add-pbl.component';
import { AddNewPartIIOrPdxComponent } from './components/procedures/add-new-part-ii-or-pdx/add-new-part-ii-or-pdx.component';
import { RequestNewMainMicroTypeComponent } from './components/procedures/request-new-main-micro-type/request-new-main-micro-type.component';
import { CalibrationEngineerComponent } from './components/procedures/calibration-engineer/calibration-engineer.component';
import { ReleaseEngineerComponent } from './components/procedures/release-engineer/release-engineer.component';
import { EditCalibrationComponent } from './components/procedures/calibration-engineer/edit-calibration/edit-calibration.component';
import { ResetCalibrationReviewComponent } from './components/procedures/calibration-engineer/reset-calibration-review/reset-calibration-review.component';
import { SendCalibrationForReviewComponent } from './components/procedures/calibration-engineer/send-calibration-for-review/send-calibration-for-review.component';
import { AddProgramToReleasedPartComponent } from './components/procedures/release-engineer/add-program-to-released-part/add-program-to-released-part.component';
import { EditModuleBaseInfoComponent } from './components/procedures/release-engineer/edit-module-base-info/edit-module-base-info.component';
import { GenerateWersDScreenComponent } from './components/procedures/release-engineer/generate-wers-d-screen/generate-wers-d-screen.component';
import { ResetModuleBaseInfoComponent } from './components/procedures/release-engineer/reset-module-base-info/reset-module-base-info.component';
import { ResetSoftLockComponent } from './components/procedures/release-engineer/reset-soft-lock/reset-soft-lock.component';
import { SoftwareReleaseAnalystComponent } from './components/procedures/software-release-analyst/software-release-analyst.component';
import { EditPartNumberComponent } from './components/procedures/software-release-analyst/edit-part-number/edit-part-number.component';
import { FirmwareDataForPrismInputComponent } from './components/procedures/software-release-analyst/firmware-data-for-prism-input/firmware-data-for-prism-input.component';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { ConcernNoticeComponent } from './components/lookup-release-info/concern-notice/concern-notice.component';
import { AdvanceSearchComponent } from './components/lookup-release-info/advance-search/advance-search.component';
import { ProgramComponent } from './components/lookup-release-info/advance-search/program/program.component';
import { PartNumberComponent } from './components/lookup-release-info/advance-search/part-number/part-number.component';
import { UserEnrollmentComponent } from './components/help/user-enrollment/user-enrollment.component';
import { FirmwareDescriptionAndOwnersComponent } from './components/help/firmware-description-and-owners/firmware-description-and-owners.component';
import { SupplierCalibrationDownloadComponent } from './components/supplier-request/supplier-calibration-download/supplier-calibration-download.component';
import { SupplierIvsCalibrationDownloadComponent } from './components/supplier-request/supplier-ivs-calibration-download/supplier-ivs-calibration-download.component';
import { XmlComponent } from './components/output-release-info/xml/xml.component';
import { PrismInputComponent } from './components/output-release-info/prism-input/prism-input.component';
import { FordIvsCalibrationDownloadComponent } from './components/output-release-info/ford-ivs-calibration-download/ford-ivs-calibration-download.component';
import { FordProgramReportComponent } from './components/output-release-info/ford-program-report/ford-program-report.component';
import { CoordinatedModuleMatrixComponent } from './components/output-release-info/coordinated-module-matrix/coordinated-module-matrix.component';
import { WersPowerSelectTableComponent } from './components/output-release-info/wers-power-select-table/wers-power-select-table.component';
import { SoftwareDrawingComponent } from './components/output-release-info/software-drawing/software-drawing.component';

@NgModule({
  declarations: [
    ReleaseComponent,
    ReleaseSidebarComponent,
    AddSblComponent,
    AddPblComponent,
    AddNewPartIIOrPdxComponent,
    RequestNewMainMicroTypeComponent,
    CalibrationEngineerComponent,
    ReleaseEngineerComponent,
    EditCalibrationComponent,
    SendCalibrationForReviewComponent,
    ResetCalibrationReviewComponent,
    AddProgramToReleasedPartComponent,
    EditModuleBaseInfoComponent,
    GenerateWersDScreenComponent,
    ResetModuleBaseInfoComponent, 
    ResetSoftLockComponent,
    SoftwareReleaseAnalystComponent,
    EditPartNumberComponent,
    FirmwareDataForPrismInputComponent,
    ConcernNoticeComponent,
    AdvanceSearchComponent,
    ProgramComponent,
    PartNumberComponent,
    UserEnrollmentComponent,
    FirmwareDescriptionAndOwnersComponent,
    SupplierCalibrationDownloadComponent,
    SupplierIvsCalibrationDownloadComponent,
    XmlComponent,
    PrismInputComponent,
    FordIvsCalibrationDownloadComponent,
    FordProgramReportComponent,
    CoordinatedModuleMatrixComponent,
    WersPowerSelectTableComponent,
    SoftwareDrawingComponent
  ],
  imports: [
    CommonModule,
    ReleaseRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatSelectModule,
    MatRadioModule,
  ]
})
export class ReleaseModule { }

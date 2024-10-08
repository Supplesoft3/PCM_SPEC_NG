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
import { ConcernNoticeComponent } from './components/lookup-release-info/concern-notice/concern-notice/concern-notice.component';

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
    ConcernNoticeComponent
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
  ]
})
export class ReleaseModule { }

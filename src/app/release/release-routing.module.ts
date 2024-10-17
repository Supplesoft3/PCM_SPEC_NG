import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReleaseComponent } from './release.component';
import { Error404Component } from '../error-page/error-404/error-404.component';
import { AddSblComponent } from './components/procedures/add-sbl/add-sbl.component';
import { AddPblComponent } from './components/procedures/add-pbl/add-pbl.component';
import { AddNewPartIIOrPdxComponent } from './components/procedures/add-new-part-ii-or-pdx/add-new-part-ii-or-pdx.component';
import { RequestNewMainMicroTypeComponent } from './components/procedures/request-new-main-micro-type/request-new-main-micro-type.component';
import { CalibrationEngineerComponent } from './components/procedures/calibration-engineer/calibration-engineer.component';
import { ReleaseEngineerComponent } from './components/procedures/release-engineer/release-engineer.component';
import { SoftwareReleaseAnalystComponent } from './components/procedures/software-release-analyst/software-release-analyst.component';
import { ConcernNoticeComponent } from './components/lookup-release-info/concern-notice/concern-notice.component';
import { AdvanceSearchComponent } from './components/lookup-release-info/advance-search/advance-search.component';
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

const routes: Routes = [
  {
    path: '',
    component: ReleaseComponent,
    children: [
      // { path: '', redirectTo: 'add-sbl', pathMatch: 'full' },
      { path: 'add-new-sbl', component: AddSblComponent },
      { path: 'add-new-pbl', component: AddPblComponent },
      { path: 'add-new-part-II-or-pdx', component: AddNewPartIIOrPdxComponent },
      { path: 'request-new-main-micro-type', component: RequestNewMainMicroTypeComponent},
      { path: 'calibration-engineer', component: CalibrationEngineerComponent},
      { path: 'release-engineer', component: ReleaseEngineerComponent},
      { path: 'software_release_analyst', component: SoftwareReleaseAnalystComponent},
      { path: 'concern-notice', component: ConcernNoticeComponent },
      { path: 'advanced-search', component: AdvanceSearchComponent },
      { path: 'user-enrollment', component: UserEnrollmentComponent },
      {path:"firmware-description-and-owners", component:FirmwareDescriptionAndOwnersComponent},
      {path:"supplier-calibration-download",component:SupplierCalibrationDownloadComponent},
      {path:"supplier-ivs-calibration-download",component:SupplierIvsCalibrationDownloadComponent},
      {path: "xml", component: XmlComponent},
      { path: "prism-input", component: PrismInputComponent},
      {path: "ford-ivs-calibration-download", component: FordIvsCalibrationDownloadComponent},
      {path: "ford-program-report", component: FordProgramReportComponent},
      {path: "coordinated-module-matrix", component: CoordinatedModuleMatrixComponent},
      {path: "wers-power-select-table", component:WersPowerSelectTableComponent},
      {path:"software-drawing", component: SoftwareDrawingComponent},
      { path: '**', component: Error404Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReleaseRoutingModule { }
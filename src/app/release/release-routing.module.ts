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
import { ConcernNoticeComponent } from './components/lookup-release-info/concern-notice/concern-notice/concern-notice.component';

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
      { path: 'concern-notice', component: ConcernNoticeComponent },
      { path: '**', component: Error404Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReleaseRoutingModule { }
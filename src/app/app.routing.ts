import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { SampleProjectComponent } from './sample-project/sample-project.component';
import { DfmComponent } from './dfm/dfm.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { ReportComponent } from './report/report.component';
import {DfmRunComponent} from './dfm-run/dfm-run.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'sampleproject', component: SampleProjectComponent },
  { path: 'dfm', component: DfmComponent },
  { path: 'analysis', component: AnalysisComponent },
  { path: 'report', component: ReportComponent },
  { path: 'dfmRun', component: ReportComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

export const appRoutingModule = RouterModule.forRoot(routes);

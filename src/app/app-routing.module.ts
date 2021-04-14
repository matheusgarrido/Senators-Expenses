import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SenatorsListComponent } from '../app/senators-list/senators-list.component';
import { SenatorInformationComponent } from '../app/senator-information/senator-information.component';

const routes: Routes = [
  { path: '', component: SenatorsListComponent, pathMatch: 'full' },
  { path: 'senator', component: SenatorsListComponent },
  { path: 'senator/:id', component: SenatorInformationComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

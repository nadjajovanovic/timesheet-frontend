import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ProjectComponent } from './components/project/project.component';
import { ReportComponent } from './components/report/report.component';
import { TeamMemberComponent } from './components/team-member/team-member.component';

const routes: Routes = [
  { path: 'client', component: ClientsComponent },
  { path: 'category', component: CategoryComponent},
  { path: 'team-member', component: TeamMemberComponent},
  { path: 'project', component: ProjectComponent },
  { path: 'report', component: ReportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

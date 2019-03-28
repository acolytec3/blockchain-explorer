import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: 'blockchain', component: TableComponent},
  {path: 'transaction',component: TransactionFormComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/blockchain', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

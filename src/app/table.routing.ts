import { DataTableServerScrollingComponent } from './data-table-server-scrolling/data-table-server-scrolling.component';
import { DataTableServerPagingComponent } from './data-table-server-paging/data-table-server-paging.component';
import { DataTableSrollComponent } from './data-table-sroll/data-table-sroll.component';
import { DataTablePagingComponent } from './data-table-paging/data-table-paging.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tpage', pathMatch: 'full' },
  { path: 'tpage', component: DataTablePagingComponent },
  { path: 'tscroll', component: DataTableSrollComponent },
  { path: 'tpserver', component: DataTableServerPagingComponent },
  { path: 'tscserver', component: DataTableServerScrollingComponent }
];

export const TableRoutes = RouterModule.forRoot(routes);

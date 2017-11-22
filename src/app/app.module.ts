import { TableRoutes } from './table.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataTablePagingComponent } from './data-table-paging/data-table-paging.component';
import { DataTableSrollComponent } from './data-table-sroll/data-table-sroll.component';
import { TableService } from './commons/services/table.service';
import { DataTableServerPagingComponent } from './data-table-server-paging/data-table-server-paging.component';
import { DataTableServerScrollingComponent } from './data-table-server-scrolling/data-table-server-scrolling.component';


@NgModule({
  declarations: [
    AppComponent,
    DataTablePagingComponent,
    DataTableSrollComponent,
    DataTableServerPagingComponent,
    DataTableServerScrollingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TableRoutes,
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }

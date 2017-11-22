import { TableService } from './../commons/services/table.service';
import { ViewChild, Component, OnInit, AfterViewInit } from '@angular/core';
import 'rxjs/Rx';

declare var $: any;

@Component({
  selector: 'app-data-table-paging',
  template: `<table id='pageTable' class="display" cellspacing="0" width="100%" #pageTable></table>`,
  styleUrls: ['./data-table-paging.component.css']
})
export class DataTablePagingComponent implements OnInit, AfterViewInit {
  @ViewChild('pageTable') pageTable;
  private tableOptions = {
    data: [],
    columns: [],
    scrollCollapse: true,
    paging: true
  };

  constructor(private tableService: TableService) {
    console.log('Call constructor DataTablePagingComponent!!');
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.tableService
      .getTableDataAll()
      .map(res => res.json())
      .subscribe(
      res => {
        console.log(res);
        this.tableOptions.data = res.dataSet;
        this.tableOptions.columns = res.columns;

        $(`#${this.pageTable.nativeElement.id}`)
          .DataTable(this.tableOptions);
        console.log(this.pageTable);
      });
  }
}

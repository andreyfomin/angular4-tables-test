import { TableService } from './../commons/services/table.service';
import { ViewChild, Component, OnInit, AfterViewInit } from '@angular/core';
import 'rxjs/Rx';

declare var $: any;

@Component({
  selector: 'app-data-table-sroll',
  template: `
  <table id='scrollTable' class="display" cellspacing="0" width="100%" #scrollTable>
  </table>`,
  styleUrls: ['./data-table-sroll.component.css']
})
export class DataTableSrollComponent implements OnInit, AfterViewInit {
  @ViewChild('scrollTable') scrollTable;
  private tableOptions = {
    data: [],
    columns: [],
    scrollY: '200px',
    scrollCollapse: true,
    paging: false
  };

  constructor(private tableService: TableService) {
    console.log('Constructor of DataTableSrollComponent!');
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

    this.tableService
      .getTableDataAll()
      .map(res => res.json())
      .subscribe(
      res => {
        console.log(res);
        this.tableOptions.data = res.dataSet;
        this.tableOptions.columns = res.columns;

        $(`#${this.scrollTable.nativeElement.id}`)
          .DataTable(this.tableOptions);
        console.log(this.scrollTable);
      });
  }
}

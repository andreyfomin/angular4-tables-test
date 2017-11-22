import { TableService } from './../commons/services/table.service';
import { ViewChild, Component, OnInit, AfterViewInit } from '@angular/core';
import 'rxjs/Rx';

declare var $: any;

@Component({
  selector: 'app-data-table-server-scrolling',
  template: `<table id='tableServerScrolling' class="display nowrap" cellspacing="0" width="100%" #tableServerSctolling>
  <thead>
  <tr>
      <th>ID</th>
      <th>First name</th>
      <th>Last name</th>
      <th>ZIP / Post code</th>
      <th>Country</th>
  </tr>
</thead>
  </table>`,
  styleUrls: ['./data-table-server-scrolling.component.css']
})
export class DataTableServerScrollingComponent implements OnInit, AfterViewInit {
  @ViewChild('tableServerSctolling') tableServerSctolling;
  private tableOptions = {
    serverSide: true,
    searching: false,
    ajax: function (data, callback, settings) {
      const out = [];

      for (let i = data.start, ien = data.start + data.length; i < ien; i++) {
        out.push([i + '-1', i + '-2', i + '-3', i + '-4', i + '-5']);
      }

      setTimeout(function () {
        callback({
          draw: data.draw,
          data: out,
          recordsTotal: 100,
          recordsFiltered: 100
        });
      }, 50);
    },
    scrollY: 400,
    scroller: {
      loadingIndicator: true
    }
  };

  constructor(private tableService: TableService) {
    console.log('Call constructor DataTableServerPagingComponent!!');
  }

  ngOnInit() { }

  ngAfterViewInit() {
    $(`#${this.tableServerSctolling.nativeElement.id}`)
      .DataTable(this.tableOptions);

    console.log(this.tableServerSctolling);
  }
}

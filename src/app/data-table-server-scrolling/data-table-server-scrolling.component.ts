import { TableService } from './../commons/services/table.service';
import { ViewChild, Component, OnInit, AfterViewInit } from '@angular/core';
import 'rxjs/Rx';

declare var $: any;

@Component({
  selector: 'app-data-table-server-scrolling',
  template: `<table id='tableServerScrolling' class="display nowrap" cellspacing="0" width="100%" #tableServerSctolling>
  </table>`,
  styleUrls: ['./data-table-server-scrolling.component.css']
})
export class DataTableServerScrollingComponent implements OnInit, AfterViewInit {
  @ViewChild('tableServerSctolling') tableServerSctolling;
  private tableOptions = {
    columnDefs: [
      {
        className: 'dt-right',
        'targets': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }
    ],
    columns: [
      {
        title: 'תאריך סנכרון',
        data: 'CreatedDate',
      },
      {
        title: 'מצב תיק',
        data: 'StageCode',
      },
      {
        title: 'דו״ל',
        data: 'EMail',
      },
      {
        title: 'מספר טלפון',
        data: 'PhoneNumber',
      },
      {
        title: 'שם פרטי 2',
        data: 'FirstName2',
      },
      {
        title: 'שם משפחה 2',
        data: 'LastName2',
      },
      {
        title: 'מ.ז. פונה 2',
        data: 'IdentityNumber2'
      },
      {
        title: 'שם פרטי 1',
        data: 'FirstName1',
      },
      {
        title: 'שם משפחה 1',
        data: 'LastName1',
      },
      {
        title: 'מ.ז. פונה 1',
        data: 'IdentityNumber1'
      },
      {
        title: 'מספר נרשם',
        data: 'CertificateNumber'
      }
    ],
    serverSide: true,
    searching: false,
    // ajax: function (data, callback, settings) {
    //   const out = [];

    //   for (let i = data.start, ien = data.start + data.length; i < ien; i++) {
    //     out.push([i + '-1', i + '-2', i + '-3', i + '-4', i + '-5']);
    //   }

    //   setTimeout(function () {
    //     callback({
    //       draw: data.draw,
    //       data: out,
    //       recordsTotal: 100,
    //       recordsFiltered: 100
    //     });
    //   }, 50);
    // },
    ajax: 'http://localhost:9999/assets/site-application-details',
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

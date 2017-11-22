import { TableService } from './../commons/services/table.service';
import { ViewChild, Component, OnInit, AfterViewInit } from '@angular/core';
import 'rxjs/Rx';

declare var $: any;

@Component({
  selector: 'app-data-table-server-paging',
  template: `<table id='tableServerPaging' class="display" cellspacing="0" width="100%" #tableServerPaging>
  </table>`,
  styleUrls: ['./data-table-server-paging.component.css']
})
export class DataTableServerPagingComponent implements OnInit, AfterViewInit {
  @ViewChild('tableServerPaging') tableServerPaging;
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
    processing: true,
    serverSide: true,
    ajax: 'http://localhost:9999/assets/site-application-details'
    // ajax: 'http://localhost:9999/assets/server_processing'
  };

  constructor(private tableService: TableService) {
    console.log('Call constructor DataTableServerPagingComponent!!');
  }

  ngOnInit() { }

  ngAfterViewInit() {
    $(`#${this.tableServerPaging.nativeElement.id}`)
      .DataTable(this.tableOptions);

    console.log(this.tableServerPaging);
  }
}

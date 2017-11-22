import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class TableService {
  private localUrl = 'assets/data.json';
  private remoteUrl = 'http://localhost:9999/assets/data.json';

  constructor(private http: Http) { }

  getTableDataAll() {
    return this.http.get(this.remoteUrl);
  }
}

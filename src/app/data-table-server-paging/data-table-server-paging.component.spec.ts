import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableServerPagingComponent } from './data-table-server-paging.component';

describe('DataTableServerPagingComponent', () => {
  let component: DataTableServerPagingComponent;
  let fixture: ComponentFixture<DataTableServerPagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableServerPagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableServerPagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTablePagingComponent } from './data-table-paging.component';

describe('DataTablePagingComponent', () => {
  let component: DataTablePagingComponent;
  let fixture: ComponentFixture<DataTablePagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTablePagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTablePagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

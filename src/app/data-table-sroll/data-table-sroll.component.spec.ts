import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableSrollComponent } from './data-table-sroll.component';

describe('DataTableSrollComponent', () => {
  let component: DataTableSrollComponent;
  let fixture: ComponentFixture<DataTableSrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableSrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableSrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableServerScrollingComponent } from './data-table-server-scrolling.component';

describe('DataTableServerScrollingComponent', () => {
  let component: DataTableServerScrollingComponent;
  let fixture: ComponentFixture<DataTableServerScrollingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableServerScrollingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableServerScrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

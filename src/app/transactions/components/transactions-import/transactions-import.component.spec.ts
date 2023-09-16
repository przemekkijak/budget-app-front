import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsImportComponent } from './transactions-import.component';

describe('TransactionsImportComponent', () => {
  let component: TransactionsImportComponent;
  let fixture: ComponentFixture<TransactionsImportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionsImportComponent]
    });
    fixture = TestBed.createComponent(TransactionsImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

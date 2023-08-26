import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountSummaryComponent } from './bank-account-summary.component';

describe('BankAccountSummaryComponent', () => {
  let component: BankAccountSummaryComponent;
  let fixture: ComponentFixture<BankAccountSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankAccountSummaryComponent]
    });
    fixture = TestBed.createComponent(BankAccountSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

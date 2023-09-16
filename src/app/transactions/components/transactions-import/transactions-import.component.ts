import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-transactions-import',
  templateUrl: './transactions-import.component.html',
  styleUrls: ['./transactions-import.component.scss']
})
export class TransactionsImportComponent {
  csvFileForm: FormGroup;
  selectedFile: File | null = null;

  constructor(private formBuilder: FormBuilder) {
    this.csvFileForm = this.formBuilder.group({
      file: [null]
    });
  }

  ngOnInit(): void {}

  onFileSelected(event: any): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];
    }
  }

  resetStepper(): void {
    this.csvFileForm.reset();
    this.selectedFile = null;
  }
}

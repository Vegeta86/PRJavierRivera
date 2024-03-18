import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  statusList: string[] = ['Alive', 'Dead', 'Unknown'];
  form: FormGroup;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, private service:CrudService) {
    this.form = this.fb.group({
      name: [data.name, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      species: [data.species, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      originName: [data.origin.name, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      status: [data.status, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  saveChanges() {
    this.data.name = this.form.value.name;
    this.data.species = this.form.value.species;
    this.data.origin.name = this.form.value.originName;
    this.data.status = this.form.value.status;
    this.service.updateCharacter(this.data.id, this.data).subscribe((data) => {
    });
  }
}

import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { toArray } from 'rxjs';
import { Result } from 'src/app/interfaces/GetCharactersResponse';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {

  form: FormGroup;
  statusList: string[] = ['Alive', 'Dead', 'Unknown'];


  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, private service: CrudService) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      species: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      originName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      status: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }



  saveChanges() {
    let characters: Result[] = JSON.parse(localStorage.getItem('characters') || '[]');
    let lastId = characters.length > 0 ? characters[characters.length - 1].id : 0;

    let data: Result = {
      id: lastId + 1,
      name: this.form.get('name')?.value,
      status: this.form.get('status')?.value,
      species: this.form.get('species')?.value,
      origin: {
        name: this.form.get('originName')?.value,
        url: ''
      },
      image: this.data,
    };
    this.service.addCharacter(data).subscribe((data) => {
    });
  }

}

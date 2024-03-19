import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor(private service:CrudService,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  saveChanges() {
    this.service.deleteCharacter(this.data.id).subscribe((data) => {});
   }

}

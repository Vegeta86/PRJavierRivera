import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { AddDialogComponent } from 'src/app/components/add-dialog/add-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  refresh: boolean = false;

  searchTerm: string = '';
  showFiller = false;

  constructor(public dialog: MatDialog, private service: CrudService) { }

  ngOnInit(): void {
  }

  addEntity() {
    this.service.getRandomCharacterImage().subscribe((data) => {
      const dialogRef = this.dialog.open(AddDialogComponent, {
        data: data
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.refresh = true;
        } else {
          this.refresh = false;
        }
      });
    });
    this.refresh = false;
  }
}

import { Component, OnInit } from '@angular/core';
import { Resp, Result } from 'src/app/interfaces/GetCharactersResponse';
import { CrudService } from 'src/app/services/crud.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  public charactersList: Result[] = [];
  searchTerm: string = '';

  constructor(private service: CrudService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getdata();
  }

  getdata() {
    this.service.getAllCharacters().subscribe(res => {
      this.charactersList = res;
    });
  }

  getDataFromLocalStorage() {
    this.charactersList = [];
    this.charactersList = JSON.parse(localStorage.getItem('characters') || '');
  }

  get filteredCharacters() {
    if (!this.searchTerm) {
      return this.charactersList;
    }
    return this.charactersList.filter(char =>
      char.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  openDialogUp(char: Result) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: char
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getDataFromLocalStorage();
    });
  }

  delete(char: Result) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: char
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getDataFromLocalStorage();
    });
  }
}

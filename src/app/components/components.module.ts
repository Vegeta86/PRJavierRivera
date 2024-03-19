import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { PipesModule } from '../pipes/pipes.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { AddDialogComponent } from './add-dialog/add-dialog.component';

@NgModule({
  declarations: [
    CharactersListComponent,
    HeaderComponent,
    UpdateDialogComponent,
    DeleteDialogComponent,
    SnackBarComponent,
    AddDialogComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    PipesModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule

  ],
  exports: [CharactersListComponent, HeaderComponent]
})
export class ComponentsModule { }

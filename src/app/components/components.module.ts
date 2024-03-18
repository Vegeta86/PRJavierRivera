import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { OptionsListComponent } from './options-list/options-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { PipesModule } from '../pipes/pipes.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';

@NgModule({
  declarations: [
    CharactersListComponent,
    HeaderComponent,
    OptionsListComponent,
    DialogComponent,
    ConfirmDialogComponent,
    SnackBarComponent
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
  exports: [CharactersListComponent, HeaderComponent, OptionsListComponent]
})
export class ComponentsModule { }

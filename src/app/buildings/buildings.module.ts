import { BuildingsTableComponent } from './components/buildings-table/buildings-table.component';
import { NicknamesInputComponent } from './components/nicknames-input/nicknames-input.component';
import { BuildingsPageComponent } from './pages/buildings-page.component';
import { BuildingsService } from './services/buildings.service';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    BuildingsPageComponent,
    BuildingsTableComponent,
    NicknamesInputComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    BuildingsService,
  ],
  exports: [
    BuildingsPageComponent,
  ],
})
export class BuildingsModule { }

import { BuildingsTableComponent } from './buildings-table.component';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('BuildingsTableComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        BuildingsTableComponent,
      ],
    }).compileComponents();
  });

});

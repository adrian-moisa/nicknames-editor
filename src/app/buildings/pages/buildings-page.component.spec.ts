import { BuildingsPageComponent } from './buildings-page.component';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('BuildingsPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        BuildingsPageComponent,
      ],
    }).compileComponents();
  });

});

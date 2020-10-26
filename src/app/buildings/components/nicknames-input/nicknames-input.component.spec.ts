import { NicknamesInputComponent } from './nicknames-input.component';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('NicknamesInputComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        NicknamesInputComponent,
      ],
    }).compileComponents();
  });

});

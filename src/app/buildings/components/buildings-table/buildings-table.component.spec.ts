import { BuildingsTableComponent } from './buildings-table.component';
import { BuildingsModule } from '../../buildings.module';
import { BuildingsService } from '../../services/buildings.service';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('BuildingsTableComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BuildingsModule,
        BrowserAnimationsModule,
      ],
      providers: [
        BuildingsService,
      ],
      declarations: [
        BuildingsTableComponent,
      ],
    }).compileComponents();
  });

  it('Submit button is disabled if a duplicate name is provided', () => {
    const fixture = TestBed.createComponent(BuildingsTableComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    const btn = compiled.querySelector('#submit-buildings');
    const input = compiled.querySelector('.add-nick-input');

    // Before Validation Error
    expect(btn.classList.contains('mat-button-disabled')).toBeFalse();

    input.value = 'A';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // After Validation Error
    expect(btn.classList.contains('mat-button-disabled')).toBeTrue();

  });

});

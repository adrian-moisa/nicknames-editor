import { BuildingsService } from '../../services/buildings.service';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
  } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
  } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map, skip } from 'rxjs/operators';

@Component({
  selector: 'app-nicknames-input',
  templateUrl: './nicknames-input.component.html',
  styleUrls: ['./nicknames-input.component.scss']
})
export class NicknamesInputComponent implements OnChanges {

  @Input() nicknames: string[];
  @Output() changed = new EventEmitter<string[]>();
  @Output() hasError = new EventEmitter<boolean>();

  form: FormGroup;
  subscription: Subscription;

  constructor(private fb: FormBuilder, private buildingsService: BuildingsService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.buildDynamicForm(changes);
  }

  /**
   * Each building can have multiple nicknames
   * Once the nicknames list changes we need to rebuild the form
   */
  private buildDynamicForm(changes: SimpleChanges): void {

    // New Nickname
    const newNickname = new FormControl('', [], [this.isUniqueNicknameValidator]);
    this.form = this.fb.group({ newNickname });

    // Subscribe
    this.subscription = this.form.valueChanges

      // Each time the form is rebuilt by adding dynamic controls, it triggers change events.
      // We need to ignore them
      .pipe(skip(this.nicknames.length))
      .subscribe(val => {

        let hasError = false;

        // tslint:disable-next-line: forin
        for (const ctrlId in this.form.controls) {
          const errors = this.form.controls[ctrlId].errors;
          if (errors !== null) {
            hasError = errors !== null;
          }
        }

        // Export Values
        this.hasError.emit(hasError);

        // Export Values
        this.changed.emit(
          this.mapNicknamesToArr(val)
        );
      });

    // Nicknames
    const nicknames = changes.nicknames.currentValue;
    nicknames.forEach((nickname, i) =>
      this.form.addControl(
        'nickname' + i,
        // TODO We need UUIDs in so we can use [this.isUniqueNicknameValidator] as well for existing projects
        new FormControl(nickname, [Validators.required])
      )
    );

  }

  isUniqueNicknameValidator = (control: AbstractControl): Observable<ValidationErrors | null> => {
    return this.buildingsService.isValidNickname(control.value).pipe(
      map(isDupe =>
        isDupe === true ? { nicknameExists: true } : null
      )
    );
  }

  // Map from form object to array
  private mapNicknamesToArr(nicknames): string[] {
    const latest = nicknames.newNickname;
    delete nicknames.newNickname;
    nicknames = Object.values(nicknames);
    nicknames.push(latest);
    return nicknames;
  }

}

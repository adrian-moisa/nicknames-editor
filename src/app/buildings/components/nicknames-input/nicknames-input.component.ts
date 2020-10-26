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
    const newNickname = new FormControl('', [Validators.required], [this.isUniqueNicknameValidator]);
    this.form = this.fb.group({ newNickname });

    // Subscribe
    this.subscription = this.form.valueChanges
      .subscribe(val =>
        this.changed.emit(this.mapNicknamesToArr(val))
      );

    // Nicknames
    const nicknames = changes.nicknames.currentValue;
    nicknames.forEach((nickname, i) =>
      this.form.addControl(
        'nickname' + i,
        new FormControl(nickname, [Validators.required], [this.isUniqueNicknameValidator])
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

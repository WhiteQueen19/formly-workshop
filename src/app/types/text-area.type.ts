import { Component } from '@angular/core'
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core'

@Component({
  selector: 'formly-field-customTextarea',
  template: `
    <mat-form-field #customTextarea class="example-full-width"><mat-label>Bug description</mat-label><textarea matInput></textarea></mat-form-field>
  `,
})

// Sustituir linea 24 por la 8 / Sustituir linea 25 por la 13
// <mat-step *ngFor="let step of field.fieldGroup; let index = index; let last = last" [completed]="isValid(step)">
// <button matStepperNext *ngIf="!last" class="btn btn-primary" type="button" [disabled]="!isValid(step)">
export class FormlyFieldTextArea extends FieldType {
  isValid(field: FormlyFieldConfig): boolean {
    if (field.key) {
      return !!field?.formControl?.valid
    }

    return field.fieldGroup
      ? field.fieldGroup.every((f) => this.isValid(f))
      : true
  }
}


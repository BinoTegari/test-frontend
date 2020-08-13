import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Injectable()
export class OrderDataService {
  private _generalFg: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.initForm();
  }


  get generalFg(): FormGroup {
    return this._generalFg;
  }

  initForm(): void {
    this._generalFg = this.formBuilder.group({
      heightFence: [null, [Validators.required]],
      lengthFence: [null, [Validators.required]],
      materialFence: ['выберите материал', [Validators.required]],
      personName: [null, [Validators.required]],
      personEmail: [null, [Validators.required]],
      personTel: [null, [Validators.required]],
    });
  }
}



import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CatalogItemComponent {

  @Input() item: CatalogItemComponent;

  intro: string;
  trademark: string;
  additive: string;
  servingsNumber: number;
  numberOfGiftMice: number;
  isClientSatisfiedFlag: boolean;
  weightValue: string;
  weightMeasureUnit: string;
  description: string;
  isSoldOut: boolean;

  constructor() {
  }

  static of(intro: string, trademark: string, additive: string,
            servingsNumber: number, numberOfGiftMice: number, isClientSatisfiedFlag: boolean,
            weightValue: string, weightMeasureUnit: string,
            description: string, isSoldOut: boolean): CatalogItemComponent {
    const item = new CatalogItemComponent();
    item.intro = intro;
    item.trademark = trademark;
    item.additive = additive;
    item.servingsNumber = servingsNumber;
    item.numberOfGiftMice = numberOfGiftMice;
    item.isClientSatisfiedFlag = isClientSatisfiedFlag;
    item.weightValue = weightValue;
    item.weightMeasureUnit = weightMeasureUnit;
    item.description = description;
    item.isSoldOut = isSoldOut;

    return item;
  }
}

import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {AppGlobals} from '../../globals';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CatalogItemComponent implements OnInit {

  @Input() item: CatalogItemComponent;

  isSelected = false;
  canSelectedBeHover = false;
  isDisabled = false;
  isMouseEnter = false;
  isMouseLeave = false;

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

  getNumEnding = AppGlobals.getNumEnding;
  aEndingsServings = ['порция', 'порции', 'порций'];
  aEndingsMouse = ['мышь', 'мыши', 'мышей'];

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

  ngOnInit(): void {
    this.isDisabled = this.item.isSoldOut;
  }

  setMouseLeave(): void {
    this.isMouseEnter = false;
    this.isMouseLeave = true;
    if (this.isSelected && !this.canSelectedBeHover) {
      this.canSelectedBeHover = true;
    }
  }

  isDefaultHover(): boolean {
    return !this.isDisabled && !this.isSelected && this.isMouseEnter;
  }

  selectedToggle() {
    if (!this.isDisabled) {
      this.isSelected = !this.isSelected;

      if (!this.isSelected) {
        this.canSelectedBeHover = false;
      }
    }
  }

  isSelectedHover() {
    return !this.isDisabled && this.canSelectedBeHover && this.isMouseEnter;
  }
}

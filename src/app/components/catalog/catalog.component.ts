import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CatalogItemComponent} from '../catalog-item/catalog-item.component';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CatalogComponent implements OnInit {

  items: CatalogItemComponent[];

  constructor(public appService: AppService) {
  }

  ngOnInit(): void {
    this.items = this.appService.getCatalog();
  }
}

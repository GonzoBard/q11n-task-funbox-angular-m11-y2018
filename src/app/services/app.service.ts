import {Injectable} from '@angular/core';
import {CatalogItemComponent} from '../components/catalog-item/catalog-item.component';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  getCatalog(): CatalogItemComponent[] {
    return [
      CatalogItemComponent.of(
        'Сказочное заморское яство', // , по ирн Сказочное заморское яство
        'Нямушка',                   // и Нямушка, Нямушка
        'с фуа-гра',                 // , с фуа-гра, с фуа-гра, с фуа-гра, с фуа-гра
        10,
        1,
        false,
        '0,5',
        'кг',
        'Печень утки разварная с артишоками.',
        false
      ),
      CatalogItemComponent.of(
        'Сказочное заморское яство',
        'Нямушка',
        'с рыбой',
        40,
        2,
        false,
        '2',
        'кг',
        'Головы щучьи с чесноком да свежайшая сёмгушка.',
        false
      ),
      CatalogItemComponent.of(
        'Сказочное заморское яство',
        'Нямушка',
        'с курой',
        100,
        5,
        true,
        '5',
        'кг',
        'Филе из цыплят с трюфелями в бульоне.',
        true
      )
    ];
  }
}

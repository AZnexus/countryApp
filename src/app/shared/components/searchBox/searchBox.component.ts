
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'shared-search-box',
    templateUrl: './searchBox.component.html',
    styles: []
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = ''; // Aixo es un parametre que es podrà fer servir en el HTML

  @Output()
  public onValue = new EventEmitter<string>();

  emitValue(value: string):void {
    this.onValue.emit(value);
  }
}

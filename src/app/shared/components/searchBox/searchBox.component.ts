
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
    selector: 'shared-search-box',
    templateUrl: './searchBox.component.html',
    styles: []
})
export class SearchBoxComponent implements OnInit {

  private debouncer: Subject<string> = new Subject<string>(); // Es un tiopus especial d'Observable

  @Input()
  public placeholder: string = ''; // Aixo es un parametre que es podrà fer servir en el HTML

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncer
      .pipe(
        debounceTime(300) // Espera 1 segon per agafar-ho
      )
      .subscribe(value => {
        this.onDebounce.emit(value);
    })
  }

  emitValue(value: string):void {
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }
}

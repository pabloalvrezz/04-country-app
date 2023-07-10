import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {

  @Input()
  public placeHolder: string = ''


  @Output()
  public onValue = new EventEmitter<string>();

  emitValue(value: string): void {
    this.onValue.emit(value)

  }
}

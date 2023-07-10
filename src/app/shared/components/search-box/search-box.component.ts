import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs'

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer = new Subject<string>();
  private debouncerSubscription?: Subscription;

  @Input()
  public placeHolder: string = ''

  @Input()
  public initialValue: string = ''

  @Output()
  public onValue = new EventEmitter<string>();


  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(
        debounceTime(750)
      )
      .subscribe(value => {
        this.onDebounce.emit(value)
      });
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe()
  }

  emitValue(value: string): void {
    this.onValue.emit(value)

  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm)
  }
}

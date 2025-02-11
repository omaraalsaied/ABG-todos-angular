import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<string>();
  @Output() toggleFilters = new EventEmitter<void>();

  private searchSubject = new Subject<string>();
  searchTerm = '';

  constructor() {
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(term => this.search.emit(term));
  }

  onSearch(term: string) {
    this.searchTerm = term;
    this.searchSubject.next(term);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
  standalone: true
})
export class FilterComponent {
  @Input() currentFilter = 'all';
  @Output() filterChange = new EventEmitter<string>();
}

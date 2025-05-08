import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone:true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  query = '';
  @Output() searchEvent = new EventEmitter<string>();

  search(): void {
    if (this.query.trim()) {
      this.searchEvent.emit(this.query.trim());
    }
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UtilService } from '../common/services/utilService/util.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchText: string = '';

  constructor(private utilService: UtilService) { }

  ngOnInit(): void {
  }

  onSearch() {
    this.utilService.setDashboardMenuValue(this.searchText);
  }
}

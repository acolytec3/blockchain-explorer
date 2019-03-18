import { Component, OnInit } from '@angular/core';
import { blockchainExplorerService } from '../blockchain-explorer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent implements OnInit {

  characters: Observable<any[]>;
  columns: string[];

  constructor(private atService: blockchainExplorerService) { }

  ngOnInit() {
    this.columns = this.atService.getColumns(); 
    //["Block","Sender","Recipient","Amount"]
    this.characters = this.atService.getChain();
    //all data in mock-data.ts
  }

}

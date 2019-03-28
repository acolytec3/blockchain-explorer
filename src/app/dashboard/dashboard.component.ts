import { Component, OnInit } from '@angular/core';
import { blockchainExplorerService } from '../blockchain-explorer.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private atService: blockchainExplorerService) { }

  ngOnInit() {
    this.atService.mineBlock().pipe(tap(data => console.log(data)));
  }
  blockMined: Observable<any>;
  onClick(){
    console.log('clicked');
    this.blockMined = this.atService.mineBlock().pipe(tap(data => console.log(data))
    .subscribe(response => console.log(response)));
  }
  ngOnDestroy(){
    this.blockMined.unsubscribe();
  }
}

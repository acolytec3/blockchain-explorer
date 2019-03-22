import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { blockchainExplorerService } from '../blockchain-explorer.service';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnInit {

  constructor(private atService: blockchainExplorerService) { }

  ngOnInit() {
  }
  
  submitted = false;
  model = new Transaction('ABC','DEF',1);

  onSubmit(){ 
    this.submitted = true;
    this.atService.postTransaction(this.model);

  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}

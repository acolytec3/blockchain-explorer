import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { blockchainExplorerService } from '../blockchain-explorer.service';
import { Observable } from 'rxjs';

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
  transactionMessage :Observable<string>;
  onSubmit(){ 
    this.submitted = true;
    this.transactionMessage = this.atService.postTransaction(this.model);
    console.log(this.transactionMessage);

  }
}

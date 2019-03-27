import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { blockchainExplorerService } from '../blockchain-explorer.service';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs'
 
class transactionMessage{
  message: string;
}
@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnInit {

 
  constructor(private atService: blockchainExplorerService) { }

  ngOnInit() {
  }
  response: Observable<transactionMessage>;
  blockMined: Observable<any>;
  submitted = false;
  model = new Transaction('ABC','DEF',1);
  
  onSubmit(){ 
    this.submitted = true;
    this.response = this.atService.postTransaction(this.model).pipe(catchError((error) => {
        console.log(error.message)
        return of<transactionMessage>({message: 'Transaction failed'});
    }
    ));
    this.blockMined = this.atService.mineBlock().pipe(tap(data => console.log(data)));

  }
}

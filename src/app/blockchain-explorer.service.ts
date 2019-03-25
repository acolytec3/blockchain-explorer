import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { CHARACTERS } from './mock-data';
import { HttpClient } from '@angular/common/http';



export interface Transaction {
  amount: number;
  recipient: string;
  sender: string;
}

export interface Block {
  index: number;
  previous_hash: any;
  proof: number;
  timestamp: number;
  transactions: Transaction[];
}

export interface Chain {
  chain: Block[];
  length: number;
}

@Injectable()

export class blockchainExplorerService {
constructor(private http: HttpClient) { }
getChain(): Observable<any[]>{
  
    var chain : any[] = [];
    this.http.get<Chain>('/chain').subscribe(data => {
    
		for (let i = 0; i < data.chain.length; i++){
		  if( data.chain[i].transactions !== []){
					for (let j = 0; j < data.chain[i].transactions.length; j++){
						chain.push({
						'Block':data.chain[i].index,
						'Sender':data.chain[i].transactions[j].sender, 
						'Recipient':data.chain[i].transactions[j].recipient,
						'Amount':data.chain[i].transactions[j].amount,
						});
					}
				}
      }  
  });
  return of(chain).pipe(delay(100));
}
getColumns(): string[]{
  return ["Block", "Sender", "Recipient", "Amount"]
}

postTransaction(transaction: Transaction): Observable<any>{
  var message: string = '';
  return this.http.post<any>('/transactions/new',
  {
    sender: transaction.sender,
    recipient: transaction.recipient,
    amount: transaction.amount
  })
  .subscribe(data =>{ 
  console.log(message);
  }) 
//  return of<string>(message);
 }
} 



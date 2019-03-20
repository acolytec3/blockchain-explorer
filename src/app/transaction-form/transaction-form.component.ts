import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  submitted = false;
  model = new Transaction('ABC','DEF',1);

  onSubmit(){ this.submitted = true;}

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}

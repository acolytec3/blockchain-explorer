import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { CHARACTERS } from './mock-data';
import { HttpClient } from '@angular/common/http';
@Injectable()

export class blockchainExplorerService {
constructor(private http: HttpClient) { }
getChain(): Observable<any[]>{
  this.http.get('/chain').subscribe(data => console.log(data));
  return of(CHARACTERS).pipe(delay(100));
}
getColumns(): string[]{
  return ["Block", "Sender", "Receiver", "Amount"]};
 }

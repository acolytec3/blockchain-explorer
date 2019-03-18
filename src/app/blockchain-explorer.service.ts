import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { CHARACTERS } from './mock-data';
@Injectable()

export class blockchainExplorerService {
constructor() { }
getCharacters(): Observable<any[]>{
  return of(CHARACTERS).pipe(delay(100));
}
getColumns(): string[]{
  return ["name", "age", "species", "occupation"]};
 }

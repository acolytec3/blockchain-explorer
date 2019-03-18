import { Component } from '@angular/core';
import { blockchainExplorerService } from './blockchain-explorer.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    blockchainExplorerService
  ]
})
export class AppComponent {
  title = 'blockchain-explorer';
}

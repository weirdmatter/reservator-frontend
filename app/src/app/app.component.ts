import { Component } from '@angular/core';
import { TesteService } from 'src/shared/services/teste.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';

  constructor(private testService : TesteService) {
    console.log('aaaaa;');

    const a = this.testService.test();
    debugger;
  }

}

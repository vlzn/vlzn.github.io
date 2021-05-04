import { Component } from '@angular/core';

@Component({
  selector: 'vlzn-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public readonly title = 'VLZN';
  public readonly me = require('../resources/me.jpg').default;
}

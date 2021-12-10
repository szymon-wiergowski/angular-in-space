import { Component, Inject } from '@angular/core';
import { AppConfig } from 'space-api/types';
import { APP_CONFIG } from './app-config-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appVersion = this.appConfig.version;
  title = 'space-app';

  constructor(@Inject(APP_CONFIG) private appConfig: AppConfig) {}
}

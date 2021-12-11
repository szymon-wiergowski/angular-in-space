import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { A2sCommModule } from 'a2s-comm';
import { API_URL } from 'space-api/tokens';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { StartComponent } from './views/start/start.component';
import { SharedLibModule } from 'shared-lib';
import { AppConfigService } from 'space-api/services';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { AppConfig } from 'space-api/types';
import { ForbiddenComponent } from './views/forbidden/forbidden.component';
import { BrowserComponent } from './views/browser/browser.component';
import { BusyInterceptor } from './services/busy.interceptor';
import { ServiceWorkerModule } from '@angular/service-worker';

function appConfigInitializer(appConfigService: AppConfigService): () => Observable<AppConfig> {
  return () => appConfigService.getAppConfig().pipe(
    tap(config => localStorage.setItem('app-config', JSON.stringify(config))),
    catchError(error => {
      appConfigService.currentAppConfig = JSON.parse(localStorage.getItem('app-config') ?? 'null');
      return appConfigService.currentAppConfig ? of(appConfigService.currentAppConfig) : throwError(error);
     })
    );;
}


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ForbiddenComponent,
    BrowserComponent
  ],
  imports: [
    A2sCommModule,
    BrowserModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule,
    SharedLibModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    {provide: API_URL, useValue: environment.apiUrl}, {
      provide: APP_INITIALIZER,
      useFactory: appConfigInitializer,
      deps: [AppConfigService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: BusyInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

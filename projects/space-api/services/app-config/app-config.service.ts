import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { API_URL } from '../../tokens';
import { AppConfig } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  currentAppConfig: AppConfig | null = null;

  constructor(private http: HttpClient, @Inject(API_URL) private apiUrl: string) {}

  getAppConfig(): Observable<AppConfig> {
    return this.http.get<AppConfig>(`${this.apiUrl}/app-config`).pipe(
      tap(appConfig => this.currentAppConfig = appConfig)
    );
  }
}

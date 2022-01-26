import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, filter, first, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  updateAvailable = this.swUpdate.versionUpdates.pipe(
    filter(event => event.type === 'VERSION_READY')
  );
  unrecoverableError = this.swUpdate.unrecoverable;

  constructor(private swUpdate: SwUpdate, private appRef: ApplicationRef) {
    if (!this.swUpdate.isEnabled) { return; }

    const appIsStable = appRef.isStable.pipe(first(Boolean));
    const everyHour = interval(1000 * 60 * 60);

    concat(appIsStable, everyHour).subscribe(() => this.swUpdate.checkForUpdate());
  }

  activateUpdate(): void {
    this.swUpdate.activateUpdate().then((activated) => {
      if (activated) {
        this.reloadApp();
      }
    });
  }

  reloadApp(): void {
    document.location.reload();
  }
}

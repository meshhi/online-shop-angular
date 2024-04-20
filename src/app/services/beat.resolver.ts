import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { EMPTY, Observable, catchError, of } from 'rxjs';
import { Beat } from '../models/Beats';
import { BeatsService } from './beats.service';

@Injectable({
  providedIn: 'root',
})
export class BeatResolver implements Resolve<Beat> {
  constructor(public beatsService: BeatsService, public router: Router) {

  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Beat> {
    return this.beatsService.getBeat(route.params?.['id']).pipe(
      catchError(() => {
        this.router.navigate(['products']);
        return EMPTY;
      })
    );
  }
}

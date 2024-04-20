import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { BeatsService } from "../../services/beats.service";
import { Observable } from 'rxjs';


export const beatResolver: ResolveFn<Object> = (route, state) => {
    console.log('RESOLVER IS RUNNING')
    const beatId = Number(route.paramMap.get('id'));
    // return new Observable((subscriber) => {
    //     subscriber.next("TEST resolver");
    //   });
    return inject(BeatsService).getBeat(beatId);
}
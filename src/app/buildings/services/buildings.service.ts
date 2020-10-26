import { Building } from '../interfaces/building';
import { buildingsMock } from '../mocks/buildings.mock';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

// We will use basic old school state in services.
@Injectable()
export class BuildingsService {

  buildings = new BehaviorSubject<Building[]>(buildingsMock);

  public isValidNickname(nickname: string): Observable<boolean> {

    const building = this.buildings.value.find(building =>
      building.nicknames.find(
        nick => nick === nickname
      )
    );

    const isDupe = building !== undefined;
    return of(isDupe);

  }

}

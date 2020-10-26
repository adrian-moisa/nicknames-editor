import { Building } from '../../interfaces/building';
import { buildingsMock } from '../../mocks/buildings.mock';
import { BuildingsService } from '../../services/buildings.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buildings-table',
  templateUrl: './buildings-table.component.html',
  styleUrls: ['./buildings-table.component.scss']
})
export class BuildingsTableComponent implements OnInit {

  public buildings: Building[];
  public buildingsCache: Building[];

  constructor(private buildingsService: BuildingsService) { }

  ngOnInit(): void {
    this.subscribeToBuildings();
  }

  cacheChangedNicknames(nicknames, index: number): void {
    this.buildingsCache = JSON.parse(JSON.stringify(
      this.buildingsService.buildings.value
    ));
    this.buildingsCache[index].nicknames = nicknames;
  }

  private subscribeToBuildings(): void {
    this.buildingsService.buildings.subscribe(buildings =>
      this.buildings = buildings
    );
  }

  saveBuildings(): void {
    this.buildingsService.buildings.next(this.buildingsCache);
    console.log('SAVE')
    console.log(this.buildingsCache)
    console.log(JSON.stringify(this.buildingsCache, null, 2))
  }
}

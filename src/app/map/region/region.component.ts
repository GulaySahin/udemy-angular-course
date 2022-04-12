import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/libs';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {

   regionData;

  constructor(private mapService:MapService) { }

  ngOnInit(): void {
    this.regionData=this.mapService.getCityRegions();
  }

}

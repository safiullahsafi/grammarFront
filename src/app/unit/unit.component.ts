import { Component, OnInit } from '@angular/core';
import { UnitService } from '../shared/services/unit.service';
import { Unit } from '../shared/models/unit';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  units: Observable<Unit[]>
  constructor(private unitService: UnitService) { }

  ngOnInit() {
    this.unitService.getUnits().pipe(res => this.units = res)
  }

}

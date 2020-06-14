import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Unit } from '../models/unit';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class UnitService{

    url = "/units"
    constructor(private http: HttpClient){
        
    }

    public getUnits(): Observable<Unit[]>{
        return this.http.get<Unit[]>(environment.host + this.url,)
    }
}
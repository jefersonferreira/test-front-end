import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { endPoint } from "../Env";
import { Sector } from 'src/model/sector';

@Injectable({
    providedIn: 'root'
})
export class CollaboratorService {

    collaboratorUrl = endPoint + "/api/collaborators";
    sectorUrl = endPoint + "/api/sectors";

    constructor(private http: HttpClient) {
    }

    list() {
        return this.http.get<any[]>(`${this.collaboratorUrl}`);
    }

    list_sectors() {
        return this.http.get<any[]>(`${this.sectorUrl}`);
    }

    add_sector(Sector): Observable<Sector> {
    	return this.http.post<Sector>(sectorUrl, Sector, httpOptions).pipe(
      		tap((produto: Produto) => console.log(`adicionou o setor com w/ id=${Sector._id}`)),
      		catchError(this.handleError<Sector>('add_sector'))
    );
  }
}

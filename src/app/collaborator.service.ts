import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { endPoint } from "../Env";

@Injectable({
    providedIn: 'root'
})
export class CollaboratorService {

    collaboratorUrl = endPoint + "/api/collaborators";

    constructor(private http: HttpClient) {
    }

    list() {
        return this.http.get<any[]>(`${this.collaboratorUrl}`);
    }
}

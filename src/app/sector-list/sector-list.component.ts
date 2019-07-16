import { Component, OnInit } from '@angular/core';
import { CollaboratorService } from '../collaborator.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-sector-list',
  templateUrl: './sector-list.component.html',
  styleUrls: ['./sector-list.component.css']
})
export class SectorListComponent implements OnInit {

	sectors : Array<any>;

  	constructor(private collaboratorService: CollaboratorService, private appComponent: AppComponent) { }

  	ngOnInit() {
  		this.list();
  	}

  	list() {
      	this.collaboratorService.list_sectors().subscribe(dados => this.sectors = dados);
  	}

  	delete_sector(id) {
    	this.appComponent.delete_sector(id);
  	}

  	edit_sector(sector) {
  		this.appComponent.edit_sector(sector);
  	}

}

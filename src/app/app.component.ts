import { Component } from '@angular/core';
import { CollaboratorService } from './collaborator.service';
import { Sector } from './model/sector';
import { endPoint } from "../Env";
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {

	title = 'test-front-end';
	collaborator_list: boolean;
	sector_list: boolean;
	form_sector: boolean;
	form_collaborator: boolean;
	sector: String;
	full_name: String;
	birth_date: String;
	status: String;
	id_collaborator: String;
	id_sector: String;

	constructor(private http: HttpClient, private datePipe: DatePipe) {
		this.collaborator_list = false;
		this.sector_list = false;
		this.form_sector = false;
		this.form_collaborator = false;
		this.sector = '';
		this.full_name = '';
		this.birth_date = '';
		this.salary = '';
	}

	list_collaborator() {
		this.sector = '';
		this.full_name = '';
		this.birth_date = '';
		this.salary = '';
  		this.collaborator_list = true;
  		this.sector_list = false;
  		this.form_collaborator = false;
  		this.form_sector = false;
  	}

  	list_sector() {
  		this.sector = '';
  		this.collaborator_list = false;
  		this.sector_list = true;
  		this.form_collaborator = false;
  		this.form_sector = false;
  	}

  	add_collaborator() {
  		this.id_collaborator = '';
  		this.collaborator_list = false;
  		this.sector_list = false;
  		this.form_collaborator = true;
  		this.form_sector = false;
  	}

  	add_sector() {
  		this.id_sector = '';
  		this.collaborator_list = false;
  		this.sector_list = false;
  		this.form_collaborator = false;
  		this.form_sector = true;
  	}

  	save_collaborator() {
  		var data = {
  			"sector": this.sector,
  			"full_name": this.full_name,
  			"birth_date": this.birth_date,
  			"salary": this.salary,
  			"status": true,
  		};
  		if (this.id_collaborator == '') {
	  		var collaboratorUrl = endPoint + "/api/collaborators";
	    	this.http.post(collaboratorUrl, data).subscribe((data) => {this.list_collaborator()});
	    } else {
	    	var collaboratorUrl = endPoint + "/api/collaborators/" + this.id_collaborator;
	    	this.http.put(collaboratorUrl, data).subscribe((data) => {this.list_collaborator()});
	    }
  	}

  	save_sector() {
  		if (this.id_sector == '') {
  			var sectorUrl = endPoint + "/api/sectors";
	  		var data = {"name": this.sector};
	    	this.http.post(sectorUrl, data).subscribe((data) => {this.list_sector()});
	    } else {
	    	var sectorUrl = endPoint + "/api/sectors/" + this.id_sector;
	    	var data = {"name" : this.sector};
	    	this.http.put(sectorUrl, data).subscribe((data) => {this.list_sector()});
	    }
  	}

  	delete_collaborator(id) {
  		var collaboratorUrl = endPoint + "/api/collaborators/" + id;
  		var data = "";
    	this.http.delete(collaboratorUrl, data).subscribe((data) => {
    		this.collaborator_list = false;
    		this.collaborator_list = true;
    	});
  	}

  	delete_sector(id) {
  		var sectorUrl = endPoint + "/api/sectors/" + id;
  		var data = "";
    	this.http.delete(sectorUrl, data).subscribe((data) => {
    		this.sector_list = false;
    		this.sector_list = true;
    	});
  	}

  	edit_sector(sector) {
  		this.add_sector();
  		this.sector = sector.name;
  		this.id_sector = sector._id;
  	}

  	edit_collaborator(collaborator) {
  		this.add_collaborator();
  		this.id_collaborator = collaborator._id;
  		this.sector = collaborator.Sector;
  		this.full_name = collaborator.full_name;
  		let dateString = collaborator.birth_date;
  		this.birth_date = this.datePipe.transform(new Date(dateString), 'yyyy-MM-dd');
  		this.salary = collaborator.salary;
  		console.log(this.birth_date);
  	}
}

import { Component, OnInit } from '@angular/core';
import { CollaboratorService } from '../collaborator.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-collaborator-list',
  templateUrl: './collaborator-list.component.html',
  styleUrls: ['./collaborator-list.component.css']
})
export class CollaboratorListComponent implements OnInit {

    collaborators : Array<any>;

  constructor(private collaboratorService: CollaboratorService, private appComponent: AppComponent) { }

  ngOnInit() {
      this.list();
  }

  list() {
      this.collaborators = null;
      this.collaboratorService.list().subscribe(dados => this.collaborators = dados);
  }

  delete_collaborator(id) {
    this.appComponent.delete_collaborator(id);
  }

  edit_collaborator(collaborator) {
    this.appComponent.edit_collaborator(collaborator);
  }

}

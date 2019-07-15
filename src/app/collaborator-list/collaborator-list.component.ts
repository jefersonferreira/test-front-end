import { Component, OnInit } from '@angular/core';
import { CollaboratorService } from '../collaborator.service';

@Component({
  selector: 'app-collaborator-list',
  templateUrl: './collaborator-list.component.html',
  styleUrls: ['./collaborator-list.component.css']
})
export class CollaboratorListComponent implements OnInit {

    collaborators : Array<any>;

  constructor(private collaboratorService: CollaboratorService) { }

  ngOnInit() {
      this.list();
  }

  list() {
      this.collaboratorService.list().subscribe(dados => this.collaborators = dados);
      console.log('Lista: ', this.collaborators);
  }

}

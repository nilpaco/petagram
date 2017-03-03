import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { QueryResponse, getAllPets } from './list.interface';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  posts: any;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.watchQuery<QueryResponse>({
      query: getAllPets
    }).subscribe(({data}) => {
        this.posts = data.allPosts;
        console.log(this.posts);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth.service';

@Component({
  selector: 'toolbar',
  providers: [ Auth ], 
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  title = 'agram!';

  constructor(private auth : Auth) { }

  ngOnInit() {
   }

}

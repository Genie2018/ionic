import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.page.html',
  styleUrls: ['./modifier.page.scss'],
})
export class ModifierPage implements OnInit {

id: number;
  constructor(private activateRoute: ActivatedRoute) 
  {
    this.id = Number(this.activateRoute.snapshot.paramMap.get('id'));
    console.log("id="+this.id);
   }

  ngOnInit() {
  }

}

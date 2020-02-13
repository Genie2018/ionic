import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';
import { Plat } from 'src/app/Models/plat';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.page.html',
  styleUrls: ['./modifier.page.scss'],
})
export class ModifierPage implements OnInit {

id: number;
plat : any;
  constructor(private activateRoute: ActivatedRoute, private service: PlatService) 
  {
    this.id = Number(this.activateRoute.snapshot.paramMap.get('id'));
    console.log(this.id);
    
   }

  ngOnInit() {
    this.service.get(this.id).subscribe(plat =>{
      this.plat = plat;
      console.log(plat);
    },error => {
      console.log('Une erreure est survenue');
    });
  }

}

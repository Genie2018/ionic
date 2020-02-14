import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Plat } from '../Models/plat';
import { PlatService } from '../services/plat.service';

@Component({
  selector: 'app-plat',
  templateUrl: 'plat.page.html',
  styleUrls: ['plat.page.scss']
})
export class PlatPage {

    plats = [];
      
  constructor(private router: Router, private service: PlatService) {
    this.service.getAll().subscribe(data =>{
      this.plats = data;
    },
    error => {
      console.log('Une erreure est survenue');
    });
  }
    update(id: number): void
    { 
      this.router.navigate(['/tabs/plat/modifier',id]);
    }
    delete(id: number): void
    { console.log(id);
      this.service.delete(id).subscribe(data =>{
        this.service.getAll().subscribe(data =>{
          this.plats = data;
        })       
      });
    }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plat',
  templateUrl: 'plat.page.html',
  styleUrls: ['plat.page.scss']
})
export class PlatPage {

    plats = [
      {
        id: 1,
        nom: 'Tieb',
        prix: 1200
      },
      {
        id: 2,
        nom: 'Mafe',
        prix: 1200
      },
      {
        id: 3,
        nom: 'Yassa',
        prix: 1200
      },
      {
        id: 4,
        nom: 'SOUPOU KANDJIA',
        prix: 1200
      }
      
    ]
  constructor(private router: Router) {}
    ModifierPlat(id: number): void
    {
      this.router.navigate(['/tabs/plat/modifier',id]);
    }
}

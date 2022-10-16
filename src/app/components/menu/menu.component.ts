import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }
  public mostrarMenu(){
     let menu = document.getElementById('menu');
     if(menu != null){

       menu.style.right= '335px'
     }

  }

  public navegar(seccion: string) {
    let div = document.getElementById(seccion);
    let menu = document.getElementById('menu');
    if (div != null && menu!=null) {
      div.scrollIntoView({ behavior: 'smooth', block: 'center' });
      menu.style.right= '0px'

    }

  }

}

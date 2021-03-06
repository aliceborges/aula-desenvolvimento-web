import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { HelloWorldPage } from '../hello-world/hello-world';

//@IonicPage() // Serve para ser só página. CRTL+. para adicionar automaticamente nos Imports.
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {} //Injeção de dependência o public dentro do construtor - navCtrl vira atributo da classe
  private menu(pagina:string){
    switch(pagina){
      case 'HelloWorldPage':
        this.navCtrl.push(HelloWorldPage); //Push é para ir de uma página para outra
        break;
      case 'DataBindingPage':
        this.navCtrl.push('DataBindingPage');
        break;
    }
  }

}

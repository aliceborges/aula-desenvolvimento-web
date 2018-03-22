import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

//@IonicPage() // Serve para ser só página. CRTL+. para adicionar automaticamente nos Imports.
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {} //Injeção de dependência o public dentro do construtor - navCtrl vira atributo da classe
  private menu (){
    console.log('clicou no botão')
    this.navCtrl.push('HelloWorldPage') //Push é para ir de uma página para outra
  }

}
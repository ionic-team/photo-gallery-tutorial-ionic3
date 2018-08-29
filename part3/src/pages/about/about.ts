import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhotoProvider } from '../../providers/photo/photo';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public photoService: PhotoProvider) {

  }

  ngOnInit() {
    this.photoService.loadSaved();
  }

}
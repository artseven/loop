import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio'

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private nativeAudio: NativeAudio
  ) {
  }

  ionViewDidLoad() {
    this.nativeAudio.preloadSimple('uniqueid1', '../.../assets/sound/peter_griffin_laugh.mp3');
  console.log('SHOULD BE PLAYING');
    this.nativeAudio.play('uniqueid1');
  }

}

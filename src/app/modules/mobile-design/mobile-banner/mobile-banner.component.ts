import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from "rxjs"

@Component({
  selector: 'app-mobile-banner',
  templateUrl: './mobile-banner.component.html',
  styleUrls: ['./mobile-banner.component.css']
})
export class MobileBannerComponent implements OnInit {
  /****** Banner content observer for realtime changes ******/
  banner: Observable<any[]>;
  public tagLine = "";
  public title = "";
  public browseText = "";

  constructor(private firebase: AngularFireDatabase) {
    /****** banner content fetching operations */
    this.banner = this.firebase.list("/Banner").valueChanges();
    this.banner.subscribe(data => {
      this.browseText = data[0];
      this.tagLine = data[1];
      this.title = data[2];
    });
  }

  ngOnInit() {
  }

}

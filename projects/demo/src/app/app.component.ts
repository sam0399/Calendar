import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'demo';

  lang: string = 'es';

  constructor(private config: PrimeNGConfig) {}

  ngOnInit() {
  }

  changeLang() {
    this.lang = this.lang === 'en' ? 'es' : 'en';
  }
}

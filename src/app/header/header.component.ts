import { Component, OnInit } from '@angular/core';
interface Locale {
  label:string;
  value:string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // the locales the app supports
  locales :Locale[] = [
    { label: 'English', value: 'en-US' },
    { label: 'Svenska', value: 'sv-SE' },
    { label: 'Français', value: 'fr-FR' },
    { label: 'Español', value: 'es-ES' },
    { label: 'Português', value: 'pt-BR' },
  ];

  // the user's locale
  detectedLocale = 'en-US';

  // the default locale
  locale = this.locales[0].value;
  constructor() { }

  ngOnInit() {
  }


  // change locale/language at runtime
  updateLocale(locale:Event) {
    /*console.log('update locale', locale);
    if (this.locales.some(l => l.value === locale)) {
      this.locale = locale;
    }
    const lang = locale.substring(0, 2);
    this.translocoService.setActiveLang(lang);*/
  }

  onLocalization(locale:string): void{
    this.detectedLocale=locale;
  }

}

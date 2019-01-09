class Storage {
   constructor() {
     this.city;
     this.state;
     this.langauage;
     this.defaultCity = 'Tampa';
     this.defaultState = 'FL';
     this.defaultLanguage = 'eng'
   }
 
   getLocationData() {
     if(localStorage.getItem('city') === null) {
       this.city = this.defaultCity;
     } else {
       this.city = localStorage.getItem('city');
     }
 
     if(localStorage.getItem('state') === null) {
       this.state = this.defaultState;
     } else {
       this.state = localStorage.getItem('state');
     }
     if(localStorage.getItem('language') === null) {
      this.language = this.defaultLanguage;
    } else {
      this.language = localStorage.getItem('language');
    }
 
     return {
       city: this.city,
       state: this.state,
       language: this.language,
     }
   }
 
   setLocationData(city, state, language) {
     localStorage.setItem('city', city);
     localStorage.setItem('state', state);
     localStorage.setItem('language', language);
   }
 }
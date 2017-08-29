import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  //template: `<h1>{{title}}</h1><h2>{{hero}} details!</h2>`
  //template: `<h1>{{title}}</h1><h2>{{hero.name}} details!</h2>`
  template: `
  <h1>{{title}}{{id}}</h1>
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div><label>name: </label>{{hero.name}}</div>
  <div>
  <label>name: </label>
  <input [(ngModel)]="hero.name" placeholder="name">
</div>
  `
})
export class AppComponent {
  title = 'Tour of Heroes'
  id = 23
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}

export class Hero {
  id: number;
  name: string;
}

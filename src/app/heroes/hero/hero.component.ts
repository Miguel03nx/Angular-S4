import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;
  public ciudad: string = 'NY'

  get capitalizeNanme():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string{ // esto cambia el metodo
    return `${this.name} - ${this.age} -${this.ciudad}`;
  }

  changeHero():void {
    this.name = 'Spiderman'
  }

  changeAge():void{
    this.age = 25
  }

  changeciudad():void{
    this.ciudad = 'california'
  }

  resetForm():void{
    this.name = 'ironman';
    this.age = 45
    this.ciudad = 'NY';
  }
}

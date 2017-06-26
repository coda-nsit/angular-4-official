// angular 
import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';

// self written
import { Hero } from './hero';

// self written services
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit{
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
  	private heroService: HeroService, 
  	private router: Router) { 
  }

  // when to call this function to get the data? OnInit handles that 
  getHeroes(): void {
  	// this.heroes = this.heroService.getHeroes();

  	// (param1, param2, …, paramN) => { return expression; }
    this.heroService.getHeroes().then(
    	(heroes) => 
    		this.heroes = heroes
    );
  }
  
  ngOnInit(): void {
    this.getHeroes();
  }
 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
  	this.router.navigate(['/detail', this.selectedHero.id]);
  }
}

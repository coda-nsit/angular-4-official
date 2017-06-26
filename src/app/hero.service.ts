// angular
import { Injectable } from '@angular/core';

// self written
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

	// getHeroes(): Hero[] {
 //    	return HEROES;
 //  	}

	getHeroes(): Promise<Hero[]> {
    	return Promise.resolve(HEROES);
    }
    
 	getHero(id: number): Promise<Hero> {
  		return this.getHeroes()
           .then(heroes => 
           		heroes.find(hero => 
           			hero.id === id
           		)
           	);
	} 
}
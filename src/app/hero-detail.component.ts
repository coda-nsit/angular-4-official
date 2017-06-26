// angular 
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

// third party 
import 'rxjs/add/operator/switchMap';

// self written 
import { Hero } from './hero';

// self written service
import { HeroService } from './hero.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']

})
export class HeroDetailComponent implements OnInit {
  	// @Input() hero: Hero;
  	hero: Hero;

  	// Inject the ActivatedRoute, HeroService, Location services into the constructor, and saving them in private fields:
  	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute,
		private location: Location
	){}


  	// "params" Observable to get id value from the ActivatedRoute service and use the HeroService to fetch the hero with that id
	// switchMap: maps the id in the Observable route parameters to a new Observable, the result of the HeroService.getHero() method.
	// If a user re-navigates to this component while a getHero request is still processing, switchMap cancels the old request and then calls HeroService.getHero() again.
	// The hero id is a number. Route parameters are always strings. So the route parameter value is converted to a number with the JavaScript (+) operator.
	ngOnInit(): void {
		this.route.params
	    	.switchMap((params: Params) => 
	    		this.heroService.getHero(+params['id'])
	    	)
	    	.subscribe(hero => 
	    		this.hero = hero
	    	);
	}

	goBack(): void {
		this.location.back();
	}
}
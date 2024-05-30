import { Component, Inject, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldService } from './services/hello-world.service';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  providers: [HelloWorldService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1039369187.
  private readonly helloWorldService: HelloWorldService = inject(HelloWorldService);

  pokemons$: Observable<Pokemon[]> = this.helloWorldService.getPokemons();
  constructor() { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}

import { Component } from '@angular/core';
import { EmojiPipe } from '../../utils/pipes/emoji-pipe';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pokemon } from '../../utils/types/pokemon.type';

@Component({
  selector: 'app-pokedex',
  imports: [EmojiPipe, FormsModule],
  templateUrl: './pokedex.html',
  styleUrl: './pokedex.css',
})
export class Pokedex {
  pokemons : Pokemon[] = [
    {nom: "Poutinius", description: "PRIVIET : peut évoluer en Poutinium", degats: 15, type: "Nucleaire"},

  ] // créer un base

  newPokemon : Pokemon = {
    nom: "",
    description: "",
    degats: 0,
    type: "",
  }



  submitNewPokemon(): void {
    const pokemon : Pokemon = {
      ...this.newPokemon
    }

    this.pokemons.push(pokemon)
    this.newPokemon.nom = ""
    this.newPokemon.description = ""
    this.newPokemon.degats = 0
    this.newPokemon.type = ""
  }
}

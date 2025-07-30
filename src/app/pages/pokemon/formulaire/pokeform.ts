import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pokemon } from '../../../utils/types/pokemon.type';



@Component({
  selector: 'app-pokeform',
  imports: [FormsModule],
  templateUrl: './pokeform.html',
  styleUrl: './pokeform.css'
})
export class Pokeform {
  message : string = ""
  message2 : string = ""
  isSubmitted : boolean = false

  pokemon : Pokemon = {
    nom: "",
    description: "",
    degats: 0,
    type: "",
  }

  updateMessage(event: Event) : void {
    let input = event.target as HTMLInputElement
    this.message = input.value
  }

  submitPokemon() : void {
    this.isSubmitted = true
    if (this.pokemon){
      console.log(this.pokemon);
    }
  }


  // Reactive forms

  // FormControl
  pokemon_control : FormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(2),
  ])




}










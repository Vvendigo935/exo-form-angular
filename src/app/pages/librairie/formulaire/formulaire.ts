import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../../../utils/types/book.type';

@Component({
  selector: 'app-formulaire',
  imports: [FormsModule],
  templateUrl: './formulaire.html',
  styleUrl: './formulaire.css'
})
export class Formulaire {
  message : string = ""
  message2 : string = ""
  isSubmitted : boolean = false

  book : Book = {
    title: "",
    author: "",
    isRead: false
  }

  updateMessage(event: Event) : void {
    let input = event.target as HTMLInputElement
    this.message = input.value
  }

  submitBook() : void {
    this.isSubmitted = true
    if (this.book){
      console.log(this.book);
    }
  }


}

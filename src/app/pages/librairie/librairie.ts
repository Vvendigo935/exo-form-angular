import { Component } from '@angular/core';
import { EmojiPipe } from '../../utils/pipes/emoji-pipe';
import { Book } from '../../utils/types/book.type';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-librairie',
  imports: [EmojiPipe, FormsModule],
  templateUrl: './librairie.html',
  styleUrl: './librairie.css'

})
export class Librairie {
  books : Book[] = [
    {title: "Livre 1", author: "Autheur 1", isRead: true},
    {title: "Livre 2", author: "Autheur 1", isRead: false},
    {title: "Livre 3", author: "Autheur 2", isRead: true},
    {title: "Livre 4", author: "Autheur 1", isRead: false},
    {title: "Livre 5", author: "Autheur 2", isRead: true},
  ]

  toggleIsRead(book: Book) : void {
    book.isRead = !book.isRead
  }


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

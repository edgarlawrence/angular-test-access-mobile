import { Component, Input} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})


export class FormsComponent {
  selectedOption: number = 0
  selectedOption2: number = 0
  selectedOption3: number = 0
  selectedOption4: number = 0
  selectedOption5: number = 0
  selectedOption6: number = 0

  title: string = 'This is an Mini Quiz Test'
  counter = 0
  score = 0

  stringToNumber(input: number) {
    this.score = Number(input)
  }

  goToNextStep() {
    this.counter++;
    if(this.counter > 6) {
      this.counter = 6
    }
  }
  
  goToPreviousStep() {
    this.counter--;
    if(this.counter < 0) {
       this.counter = 0
    }
  }

  resetStep() {
      this.counter = 0
      this.score = 0
      this.selectedOption = 0
      this.selectedOption2 = 0
      this.selectedOption3 = 0
      this.selectedOption4 = 0
      this.selectedOption5 = 0
      this.selectedOption6 = 0
  }


}

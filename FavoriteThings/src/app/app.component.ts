import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FavoriteThings';
  favoriteColor = 'pink';
  favoriteNumber: number  = 21;

  setColor(selectedColor: string): void {
    console.log('You selected the color' + selectedColor + ': ');
    this.favoriteColor = selectedColor;
  }

  updateColor(): void {
    console.log('TO DO: Update the color');
  }

  setNumber(newFavoriteNumber: number) {
    this.favoriteNumber = newFavoriteNumber;
  }
}

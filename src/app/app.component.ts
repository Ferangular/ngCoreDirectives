import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,

  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngCoreDirectives';
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  hola() {
    if (this.array.length > 0) {
      this.array.pop();
    }
  }
}

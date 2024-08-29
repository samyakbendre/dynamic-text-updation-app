import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicContentComponent } from "./views/dynamic-content/dynamic-content.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DynamicContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dynamicTemplateApp';
}

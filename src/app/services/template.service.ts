import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor() { }

  private template: string = `
  <div class="container">
    <div class="message" style="background-image: url('{{backgroundImage}}');">
      <h1>{{title}}</h1>
      <p>{{content}}</p>
    </div>
  <div>`;

  getTemplate(title: string, content: string, backgroundImage: string): string {
    const finalTemplate = this.template
      .replace('{{title}}', title)
      .replace('{{content}}', content)
      .replace('{{backgroundImage}}', backgroundImage);
    return finalTemplate;
  }
}

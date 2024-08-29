import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor() { }

  private template: string = `
  <div class="container">
    <div class="message">
      <h1>{{title}}</h1>
      <p>{{content}}</p>
    </div>
  <div>`
  ;


  getTemplate(title:string,content:string){
    return this.template
    .replace('{{title}}',title)
    .replace('{{content}}',content)
  }


}

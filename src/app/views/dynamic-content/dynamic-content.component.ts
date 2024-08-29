import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TemplateService } from '../../services/template.service';

@Component({
  selector: 'app-dynamic-content',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-content.component.html',
  styleUrl: './dynamic-content.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class DynamicContentComponent implements OnInit {

  constructor(private templateService: TemplateService) { }

  htmlContent: string = '';
  title: string = '';
  content: string = ''

  ngOnInit(): void {
    this.title = `Coding Journey`
    this.content = `Learning to code has been an exciting and rewarding journey. Starting from simple programs to building full-fledged applications, I've developed problem-solving skills and a deeper understanding of how technology shapes our world. The more I learn, the more fascinated I become with the endless possibilities.`
    
    this.htmlContent = this.templateService.getTemplate(this.title, this.content)

  }

   // Below commented code is for taking multiple example

    // this.title = `Mountain Adventure`
    // this.content = `Exploring the mountains has been one of the most thrilling experiences of my life. From the crisp air to the breathtaking views, each hike has brought new challenges and rewards. I've learned the importance of preparation, endurance, and respecting nature along the way.`

    // this.title = `Dance Journey`
    // this.content = `Starting dance in high school has been awesome and really eye-opening. I've learned so much
    // from the basic moves to performing on stage, and its been fun and challenging. Its also been a cool way
    // to get fit and learn about different types of dances and their backgrounds.`

}

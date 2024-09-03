import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TemplateService } from '../../services/template.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-content',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class DynamicContentComponent implements OnInit {

  htmlContent: SafeHtml = '';
  title: string = '';
  content: string = '';
  backgroundImage: string = '';

  constructor(private templateService: TemplateService, private sanitizer: DomSanitizer) { }
  ngOnInit(): void {
    this.title = 'Coding Journey';

    this.content = `Learning to code has been an exciting and rewarding journey. 
                    Starting from simple programs to building full-fledged applications, 
                    I've developed problem-solving skills and a deeper understanding of 
                    how technology shapes our world. The more I learn, the more fascinated 
                    I become with the endless possibilities.`;
    this.updateData();
  }

  updateData(): void {
    const rawHtml = this.templateService.getTemplate(this.title, this.content, this.backgroundImage);
    this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(rawHtml);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file: File = input.files[0];
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target) {
          this.backgroundImage = e.target.result as string;
          this.updateData();
        }
      };

      reader.readAsDataURL(file);
    }
  }
}

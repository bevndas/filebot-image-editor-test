import { Component, OnInit } from '@angular/core';

declare const FilerobotImageEditor: any;
@Component({
  selector: 'app-image-transform-test',
  templateUrl: './image-transform-test.component.html',
  styleUrls: ['./image-transform-test.component.scss']
})
export class ImageTransformTestComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    const ImageEditor = new FilerobotImageEditor();
    ImageEditor.open('https://scaleflex.airstore.io/demo/stephen-walker-unsplash.jpg');
  }

}

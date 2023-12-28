
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import {
  PDFProgressData,
  PDFDocumentProxy,
  PDFSource,
  ZoomScale
} from './pdf-viewer/pdf-viewer.module';

import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pdfSrc: string | Uint8Array | PDFSource = '../../../assets/images/image-master.JPG';


  @ViewChild(PdfViewerComponent)
  private pdfComponent!: PdfViewerComponent;

  ngOnInit() {
    
  }

 
}

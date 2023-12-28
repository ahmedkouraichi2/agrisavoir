import { PdfDownloadServiceService } from './../../services/pdf-download-service.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-card-pfe',
  templateUrl: './card-pfe.component.html',
  styleUrls: ['./card-pfe.component.css']
})
export class CardPfeComponent {
   
  

  pdfSrc: string = "../../../assets/images/image-master.JPG"; // This should be a PDF path
  zoom: number = 1;
  constructor(private pdfService: PdfDownloadServiceService) { }

  downloadPdf() {
    this.pdfService.downloadPdf().subscribe((blob: Blob | MediaSource) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'monfichier.pdf';
      a.click();
      window.URL.revokeObjectURL(url);
    });
}

}
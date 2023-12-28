import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PdfDownloadServiceService {
  constructor(private http: HttpClient) { }

  downloadPdf() {
    return this.http.get('../../assets/pdf/Mastère-Houssem-El-Mabrouk.pdf', { responseType: 'blob' });
  }
}
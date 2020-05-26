import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isReaderMode: boolean = false;
  page: number = 1;
  totalPages: number;
  isLoaded: boolean = false;
  isDownloading: boolean = false;
  notes: string = '';
  selectedBook: any;
  dailyQuote: string =  "People often say that motivation doesn't last. Well, neither does bathing - that's why we recommend it daily.";
  books = [
    { id: 0, name: 'PDF info and test file', pages: 3, imgUrl: '../assets/illustrations/remotely.svg', link: 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf' },
    { id: 0, name: 'PDF info and test file V2', pages: 3, imgUrl: '../assets/illustrations/programming.svg', link: 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf' }
  ];

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.isReaderMode);
  }

  onReadBook(book) {
    this.selectedBook = book;
    this.isReaderMode = true;
  }

  onCloseBook() {
    this.isReaderMode = false;
  }

  onClearTextArea() {
    this.notes = '';
  }

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }

  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }

  downloadPDF(): void {
    this.isDownloading = true;
    const data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      const contentDataURL = canvas.toDataURL('image/png')
      const pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      const pageHeight = pdf.internal.pageSize.height || pdf.internal.pageSize.getHeight();
      const pageWidth = pdf.internal.pageSize.width || pdf.internal.pageSize.getWidth();
      const position = 0;
      const footerText = 'Doc Reader - ' + new Date().getFullYear();
      
      pdf.setTextColor(100);
      pdf.setFontSize(10);
      pdf.text(footerText, pageWidth / 2, pageHeight  - 10, 'center');
      pdf.addImage(contentDataURL, 'PNG', 0, position, pageWidth + 20, pageHeight - 100, 'center')
      pdf.save(new Date() + '.pdf');
      this.isDownloading = false;
    });
  }

}

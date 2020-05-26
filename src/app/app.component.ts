import { Component } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

// import { faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  page: number = 1;
  totalPages: number;
  isLoaded: boolean = false;
  notes: string = '';
  src: string = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  // saveIcon = faSave;

  constructor() {
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
    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      const contentDataURL = canvas.toDataURL('image/png')
      const pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      const pageHeight = pdf.internal.pageSize.height || pdf.internal.pageSize.getHeight();
      const pageWidth = pdf.internal.pageSize.width || pdf.internal.pageSize.getWidth();
      const position = 0;
      const footerText = "Explo Dash by Grind Square @" + new Date().getFullYear();
      
      pdf.setTextColor(100);
      pdf.setFontSize(10);
      pdf.text(footerText, pageWidth / 2, pageHeight  - 10, 'center');
      pdf.addImage(contentDataURL, 'PNG', 0, position, pageWidth + 20, pageHeight - 100, 'center')
      pdf.save(new Date() + '.pdf');
    });
  }

}

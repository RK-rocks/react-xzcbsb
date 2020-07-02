import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Canvas2Image from 'canvas2image'

const pxToMm = (px) => {
  return Math.floor(px / document.getElementById('myMm').offsetHeight);
};

const mmToPx = (mm) => {
  return document.getElementById('myMm').offsetHeight * mm;
};

const range = (start, end) => {
  return Array(end - start).join(0).split(0).map(function (val, id) { return id + start });
};


const PrintButton = ({ id, label }) => (<div className="tc mb4 mt2">
  {/*
    Getting pixel height in milimeters:
    https://stackoverflow.com/questions/7650413/pixel-to-mm-equation/27111621#27111621
  */}
  <div id="myMm" style={{ height: "1mm" }} />


  <div
    className="pa2 ba bw1 b--black bg-yellow black-90 br2 dib pointer dim shadow-1"
    onClick={() => {
      const input = document.getElementById(id);
      const inputHeightPx = mmToPx(input.offsetHeight)
      const inputHeightMm = pxToMm(input.offsetHeight);
      const a4WidthMm = 210;
      const a4HeightMm = 295;
      const a4HeightPx = mmToPx(a4HeightMm);
      const numPages = inputHeightMm <= a4HeightMm ? 1 : Math.floor(inputHeightMm / a4HeightMm) + 1;
      console.log({
        input, inputHeightMm, a4HeightMm, a4HeightPx, numPages, range: range(0, numPages),
        comp: inputHeightMm <= a4HeightMm, inputHeightPx: input.offsetHeight
      });



      html2canvas(input, {
        allowTaint: false,
        removeContainer: true,
        backgroundColor: '#ffffff',
        scale: window.devicePixelRatio,
        useCORS: false
      }).then(canvas => {
        const contentDataURL = canvas.toDataURL('image/png', 1.0)
        const imgWidth = 210;
        const pageHeight = 295;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        console.log('imgHeight', imgHeight)
        console.log('imgWidth', imgWidth)
        let heightLeft = imgHeight;

        let pdf = new jsPDF('1', 'mm', 'a4'); // A4 size page of PDF


        let position = 5;

        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
          heightLeft -= pageHeight;
        }
        pdf.save(`${id}.pdf`); // Generated PDF
      });


      // html2canvas(input)
      //   .then((canvas) => {
      //     const imgData = canvas.toDataURL('image/png');
      //     console.log(a4HeightMm)
      //     let pdf
      //     // Document of a4WidthMm wide and inputHeightMm high
      //     if (inputHeightMm > a4HeightMm) {
      //       // elongated a4 (system print dialog will handle page breaks)
      //       console.log("in if")
      //       pdf = new jsPDF('p', 'mm', [inputHeightMm + 99, a4WidthMm]);
      //     } else {
      //       console.log("in else")
      //       // standard a4
      //       pdf = new jsPDF('p', 'mm', [inputHeightMm + 89, a4WidthMm]);
      //     }

      //     pdf.addImage(imgData, 'PNG', 0, 0);
      //     pdf.save(`${id}.pdf`);
      //   });
      ;

      ////////////////////////////////////////////////////////
      // System to manually handle page breaks
      // Wasn't able to get it working !
      // The idea is to break html2canvas screenshots into multiple chunks and stich them together as a pdf
      // If you get this working, please email me a ///
      // range(0, numPages).forEach((page) => {
      //   console.log(`Rendering page ${page}. Capturing height: ${a4HeightPx} at yOffset: ${page*a4HeightPx}`);
      //   html2canvas(input, {height: a4HeightPx, y: page*a4HeightPx})
      //     .then((canvas) => {
      //       const imgData = canvas.toDataURL('image/png');
      //       console.log(imgData)
      //       if (page > 0) {
      //         pdf.addPage();
      //       }
      //       pdf.addImage(imgData, 'PNG', 0, 0);
      //     });
      //   ;
      // });

      // setTimeout(() => {
      //   pdf.save(`${id}.pdf`);
      // }, 5000);


    }}
  >
    {label}
  </div>
</div>);

export default PrintButton;
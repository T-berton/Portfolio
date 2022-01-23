import React from "react";
import samplePDF from "../../CV_Berton.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import { Container, Row, Col } from "react-bootstrap";
import SinglePagePDFViewer from "./single-page";



pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/



function cvnew() {
  return (
    <div className="cv">
      <Container fluid className="about-section">
        <Row style={{ justifyContent: "center", padding: "25px" }}>

            <Document file={samplePDF}>
              <Page pageNumber={1}></Page>
            </Document>
       
          </Row>

      </Container>

    </div>
  );
}

export default cvnew;
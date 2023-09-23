import React from 'react';
import { ScrollView, View } from 'react-native';
import PDFReader from 'rn-pdf-reader-js';

export default class PdfViewer extends React.Component {
  render() {
    const { route } = this.props;
    const { pdfPath } = route.params;

    return (
      <PDFReader
        source={{
          uri: pdfPath,
        }}
      />
    );
  }
}

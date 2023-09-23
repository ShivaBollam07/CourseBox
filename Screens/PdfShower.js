import React from 'react';
import { View, StyleSheet } from 'react-native';
import Pdf from 'react-native-pdf';

const PdfShower = ({ route }) => {
  const { pdfPath } = route.params;

  return (
    <View style={styles.container}>
      <Pdf
        source={pdfPath} // Use the pdfPath directly, which points to the PDF file
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={(error) => {
          console.error(error);
        }}
        enableRTL={false}
        fitWidth={true} // Zoom to fit the width of the screen
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PdfShower;

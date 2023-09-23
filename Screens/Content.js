import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import YoutubePlayer from 'react-native-youtube-iframe';

const Content = ({ route }) => {
  const { videoId, notes } = route.params;

  const handleYoutubeError = (error) => {
    console.error("YouTube Player Error:", error);
  };

  return (
      <ScrollView>
      <Text style={styles.sectionTitle1} >Lecture </Text>
        <View style={styles.vid}>
        <YoutubePlayer
          height={300}
          play={true}
          videoId={videoId}
          onError={(error) => handleYoutubeError(error)}
        />
        </View>
        
        <Text style={styles.sectionTitle}>Notes:</Text>
        <View >
        <Text  style={styles.notes}>{notes}</Text>
        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop:'-10%'

  },
  sectionTitle1: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop:'2%'
   

  },
 
  notes: {
    fontSize: 15,
    marginLeft: '5%',
    marginRight: '1%',
    textAlign:'left'
  },
  vid:{
    margin:15
  }

});

export default Content;

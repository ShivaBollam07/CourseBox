import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { coursesData } from './coursesData';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const CourseDetail = ({ route }) => {
  const { courseIndex } = route.params;
  const selectedCourse = coursesData[courseIndex];
  const navigation = useNavigation();

  const handleTopicPress = (topic) => {
    const selectedTopic = selectedCourse.topics.find((t) => t.title === topic);
    navigation.navigate('Content', {
      videoId: selectedTopic.videoUrl,
      notes: selectedTopic.notes,
    });
  };

  return (
    <View style={styles.container}>
    
      <View style={styles.courseTitleContainer}>
        <Text style={styles.courseTitle}>{selectedCourse.title}</Text>
      </View>
      

      <FlatList
        data={selectedCourse.topics}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.topicItem}
            onPress={() => handleTopicPress(item.title)}
          >
            <View style={styles.topicContent}>
              <FontAwesome name="angle-right" size={18} color="#009688" />
              <Text style={styles.topicTitle}>{item.title}</Text>
            </View>
            
          </TouchableOpacity>
        )}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  courseTitleContainer: {
    marginTop: 10,
    marginBottom: 20,
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    textTransform: 'uppercase',
  },
  topicItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    borderWidth: 0.4,
    borderColor: '#009688',
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  topicContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topicTitle: {
    fontSize: 15,
    color: '#009688',
    fontWeight: 'bold',
    marginLeft: 8,
    marginLeft:3

  },
  
  
});

export default CourseDetail;

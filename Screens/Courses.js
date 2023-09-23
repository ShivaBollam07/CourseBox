// Courses.js
import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { coursesData } from './coursesData';

const courseImages = {
  0: require('../images/course1.png'),
  1: require('../images/course2.png'),
  2: require('../images/course3.png'),
  3: require('../images/course4.png'),
  4: require('../images/course5.png'),
};

const Courses = () => {
  const navigation = useNavigation();

  const handleCoursePress = (courseIndex) => {
    navigation.navigate('CourseDetail', { courseIndex });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Courses <Ionicons name="ios-arrow-forward" size={24} color="black" /></Text>
      <FlatList
        style={{ marginTop: 20 }}
        data={coursesData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()} // Use index as the key
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.courseItem}
            onPress={() => handleCoursePress(index)}
          >
            <Image source={courseImages[index]} style={styles.courseImage} />
            <Text style={styles.courseTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  courseItem: {
    marginLeft: 10,
    maxWidth: 210,
    maxHeight: 200,
    marginRight: 15,
  },
  courseImage: {
    width: '100%',
    height: 130,
    borderRadius: 10,
  },
  courseTitle: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 16,
    flexWrap: 'wrap',
  },
});

export default Courses;

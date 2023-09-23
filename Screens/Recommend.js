import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const recommendData = [
  { id: '1', title: 'Machine Learning with Python', image: require('../images/ml.png'), url: 'https://cognitiveclass.ai/courses/machine-learning-with-python/' },
  { id: '2', title: 'MySQL and Relational Databases', image: require('../images/mysql.png'), url: 'https://cognitiveclass.ai/courses/learn-sql-relational-databases' },
  { id: '3', title: 'Blockchain Fundamentals', image: require('../images/blockchain.png'), url: 'https://www.coursera.org/learn/what-is-the-metaverse' },
  { id: '4', title: 'Java Programming', image: require('../images/java.png'), url: 'https://www.coursera.org/specializations/java-programming' },
  { id: '5', title: 'Python Programming', image: require('../images/python.png'), url: 'https://youtu.be/_uQrJ0TkZlc' },
  { id: '6', title: 'Cloud Computing', image: require('../images/cloud.png'), url: 'https://www.coursera.org/learn/introduction-to-cloud' },
  { id: '7', title: 'DevOps Automation', image: require('../images/devops.png'), url: 'https://www.coursera.org/learn/juniper-automation-ansible-rest-api' },
  { id: '8', title: 'Internet of Things (IoT)', image: require('../images/iot.png'), url: 'https://www.coursera.org/specializations/internet-of-things' },
  { id: '9', title: 'Data Structures in C', image: require('../images/dsa.png'), url: 'https://www.udemy.com/course/data-structures-in-c/' },
  { id: '10', title: 'Operating Systems Fundamentals', image: require('../images/os.png'), url: 'https://www.codecademy.com/learn/fundamentals-of-operating-systems' },
  { id: '11', title: 'Generative AI', image: require('../images/generativeai.png'), url: 'https://courses.nvidia.com/courses/course-v1:DLI+S-FX-07+V1/' },
];

const Recommend = () => {
  const handleCourseNavigation = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Recommended Courses <Ionicons name="ios-arrow-forward" size={24} color="black" /></Text>
      </View>
      <FlatList
        style={{ marginTop: 20 }}
        data={recommendData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.recommendItem} onPress={() => handleCourseNavigation(item.url)}>
            <Image source={item.image} style={styles.recommendImage} />
            <Text style={styles.recommendTitle}>{item.title}</Text>
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
  recommendItem: {
    marginLeft: 20,
    maxWidth: 170,
    alignItems: 'center',
    marginRight: 15,
  },
  recommendImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  recommendTitle: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 16,
    flexWrap: 'wrap', 
  },
});

export default Recommend;

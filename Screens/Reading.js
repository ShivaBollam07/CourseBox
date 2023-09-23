import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const readingData = [
  { id: '1', title: 'Java Basics', image: require('../images/java.png'), resources: ['Java W3 Schools', 'JAVA T Point', 'Java GeeksforGeeks', 'Learn Java', 'Java Programming for Beginners', 'Java Tutorial by Codecademy', 'Java Beginner Tutorial by Udemy', 'Java Documentation', 'Java Programming Examples', 'Java Programming Challenges'] },
  { id: '2', title: 'React Native Fundamentals', image: require('../images/react.png'), resources: ['React Native Docs', 'React Native Tutorial', 'React Native Getting Started', 'React Native Express', 'React Native Fundamentals by Coursera', 'React Native Crash Course by Traversy Media', 'React Native Tutorials by The Net Ninja', 'React Native Basics by Udemy', 'React Native for Beginners', 'React Native for Web Developers'] },
  { id: '3', title: 'Python for Beginners', image: require('../images/python.png'), resources: ['Python.org', 'Python Tutorials', 'Learn Python the Hard Way', 'Python for Data Science Handbook', 'Python for Everybody by Coursera', 'Python Crash Course by Eric Matthes', 'Python Basics by Codecademy', 'Python Fundamentals by edX', 'Python for Beginners by Udemy', 'Python Programming Examples'] },
  { id: '4', title: 'MySQL Essentials', image: require('../images/mysql.png'), resources: ['MySQL Docs', 'MySQL Tutorial', 'MySQL Basics by W3 Schools', 'MySQL for Beginners', 'MySQL Database Design by Udemy', 'MySQL Fundamentals by edX', 'MySQL Basics by GeeksforGeeks', 'MySQL Cheat Sheet', 'MySQL Workbench Tutorials', 'MySQL Programming Examples'] },
  { id: '5', title: 'Node.js Basics', image: require('../images/Node.png'), resources: ['Node.js Docs', 'Node.js Tutorial', 'Node.js Beginner Guide', 'Node.js Basics by Codecademy', 'Node.js for Beginners by Coursera', 'Node.js Crash Course by Traversy Media', 'Node.js Fundamentals by edX', 'Node.js Basics by The Net Ninja', 'Node.js Introduction by Udemy', 'Node.js Programming Examples'] },
  { id: '6', title: 'Docker Basics', image: require('../images/Docker.png'), resources: ['Docker Docs', 'Docker Tutorial', 'Docker Basics by Dockerize Apps', 'Docker Fundamentals by Docker Mastery', 'Docker for Beginners by Udemy', 'Docker Crash Course by Traversy Media', 'Docker Basics by Codecademy', 'Docker Essentials by edX', 'Docker Basics by GeeksforGeeks', 'Docker Programming Examples'] },
];


const Reading = () => {
  const navigation = useNavigation();

  const handleReadingItemPress = (selectedItem) => {
    // Navigate to the ResourceOptions screen with the selected item as a parameter
    navigation.navigate('ResourceOptions', { selectedItem });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Reading Materials <Ionicons name="ios-arrow-forward" size={24} color="black" /></Text>
      </View>
      <FlatList
        style={{ marginTop: 20 }}
        data={readingData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.readingItem}
            onPress={() => handleReadingItemPress(item.title)} // Pass the item's title
          >
            <Image source={item.image} style={styles.readingImage} />
            <Text style={styles.readingTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  readingItem: {
    marginLeft: 20,
    maxWidth: 190,
    alignItems: 'center',
    marginRight: 15,
  },
  readingImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  readingTitle: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 16,
    flexWrap: 'wrap',
  },
});

export default Reading;

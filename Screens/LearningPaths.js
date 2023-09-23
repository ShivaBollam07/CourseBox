import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const learningPathsData = [
  { id: '1', title: 'Java Developer Path', image: require('../images/java.png'), webUrl: 'https://roadmap.sh/java' },
  { id: '2', title: 'React Native Development Path', image: require('../images/react.png'), webUrl: 'https://roadmap.sh/java' },
  { id: '3', title: 'Python Developer Path', image: require('../images/python.png'), webUrl: 'https://roadmap.sh/python' },
  { id: '4', title: 'MySQL Learning Path', image: require('../images/mysql.png'), webUrl: 'https://roadmap.sh/sql' },
  { id: '5', title: 'Modern Node.js Developer', image: require('../images/Node.png'), webUrl: 'https://roadmap.sh/nodejs' },
  { id: '6', title: 'Docker Roadmap', image: require('../images/Docker.png'), webUrl: 'https://roadmap.sh/docker' },
];

const LearningPaths = () => {
  const handleLearningPathPress = (webUrl) => {
    Linking.openURL(webUrl); // Open the web URL in the default browser
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Learning Paths <Ionicons name="ios-arrow-forward" size={24} color="black" /></Text>
      </View>
      <FlatList
        style={{ marginTop: 20 }}
        data={learningPathsData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.learningPathItem}
            onPress={() => handleLearningPathPress(item.webUrl)}
          >
            <Image source={item.image} style={styles.learningPathImage} />
            <Text style={styles.learningPathTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  learningPathItem: {
    marginLeft: 20,
    maxWidth: 180,
    alignItems: 'center',
    marginRight: 15,
  },
  learningPathImage: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 20,
  },
  learningPathTitle: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 16,
    flexWrap: 'wrap',
  },
});

export default LearningPaths;

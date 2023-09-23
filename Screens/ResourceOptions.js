import React from 'react';
import { View, Text, TouchableOpacity, Linking,StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const ResourceOptions = ({ route }) => {
  const { selectedItem } = route.params;

  // Define resources for each item
  const resources = {
    'Java Basics': [
      { name: 'Java W3 Schools', url: 'https://www.w3schools.com/java/', icon: 'school-outline' },
      { name: 'JAVA T Point', url: 'https://www.javatpoint.com/', icon: 'book-outline' },
      { name: 'Java GeeksforGeeks', url: 'https://www.geeksforgeeks.org/java/', icon: 'code-slash-outline' },
      { name: 'Learn Java', url: 'https://www.learnjavaonline.org/', icon: 'laptop-outline' },
      { name: 'Java Programming for Beginners', url: 'https://www.java-programming.info/', icon: 'book-outline' },
      { name: 'Java Tutorial by Codecademy', url: 'https://www.codecademy.com/learn/learn-java', icon: 'book-outline' },
      { name: 'Java Beginner Tutorial by Udemy', url: 'https://www.udemy.com/topic/java/', icon: 'book-outline' },
      { name: 'Java Documentation', url: 'https://docs.oracle.com/en/java/', icon: 'document-outline' },
      { name: 'Java Programming Examples', url: 'https://www.javatpoint.com/java-tutorial', icon: 'code-slash-outline' },
      { name: 'Java Programming Challenges', url: 'https://www.hackerrank.com/domains/tutorials/10-days-of-java', icon: 'hammer-outline' },
    ],
    'React Native Fundamentals': [
      { name: 'React Native Docs', url: 'https://reactnative.dev/docs/getting-started', icon: 'document-outline' },
      { name: 'React Native Tutorial', url: 'https://www.tutorialspoint.com/react_native/index.htm', icon: 'book-outline' },
      { name: 'React Native Getting Started', url: 'https://www.learnreact.com/', icon: 'laptop-outline' },
      { name: 'React Native Express', url: 'https://www.reactnative.express/', icon: 'globe-outline' },
      { name: 'React Native Fundamentals by Coursera', url: 'https://www.coursera.org/learn/react-native', icon: 'school-outline' },
      { name: 'React Native Crash Course by Traversy Media', url: 'https://www.youtube.com/watch?v=Hf4MJH0jDb4', icon: 'play-circle-outline' },
      { name: 'React Native Tutorials by The Net Ninja', url: 'https://netninja.dev/p/react-native-crwn-clothing', icon: 'play-circle-outline' },
      { name: 'React Native Basics by Udemy', url: 'https://www.udemy.com/topic/react-native/', icon: 'book-outline' },
      { name: 'React Native for Beginners', url: 'https://www.reactnativeschool.com/p/react-native-basics-build-a-currency-converter', icon: 'laptop-outline' },
      { name: 'React Native for Web Developers', url: 'https://www.smashingmagazine.com/2020/10/react-native-web-developers/', icon: 'globe-outline' },
    ],
    'Python for Beginners': [
      { name: 'Python.org', url: 'https://www.python.org/', icon: 'globe-outline' },
      { name: 'Python Tutorials', url: 'https://www.tutorialspoint.com/python/index.htm', icon: 'book-outline' },
      { name: 'Learn Python the Hard Way', url: 'https://learnpythonthehardway.org/', icon: 'laptop-outline' },
      { name: 'Python for Data Science Handbook', url: 'https://jakevdp.github.io/PythonDataScienceHandbook/', icon: 'book-outline' },
      { name: 'Python for Everybody by Coursera', url: 'https://www.coursera.org/specializations/python', icon: 'school-outline' },
      { name: 'Python Crash Course by Eric Matthes', url: 'https://nostarch.com/pythoncrashcourse2e', icon: 'book-outline' },
      { name: 'Python Basics by Codecademy', url: 'https://www.codecademy.com/learn/learn-python-3', icon: 'book-outline' },
      { name: 'Python Fundamentals by edX', url: 'https://www.edx.org/learn/python', icon: 'school-outline' },
      { name: 'Python for Beginners by Udemy', url: 'https://www.udemy.com/topic/python/', icon: 'book-outline' },
      { name: 'Python Programming Examples', url: 'https://www.programiz.com/python-programming/examples', icon: 'code-slash-outline' },
    ],
    'MySQL Essentials': [
        { name: 'MySQL Docs', url: 'https://dev.mysql.com/doc/refman/8.0/en/', icon: 'document-outline' },
        { name: 'MySQL Tutorial by Tutorialspoint', url: 'https://www.tutorialspoint.com/mysql/index.htm', icon: 'book-outline' },
        { name: 'MySQL Basics by W3Schools', url: 'https://www.w3schools.com/sql/', icon: 'school-outline' },
        { name: 'MySQL Workbench', url: 'https://www.mysql.com/products/workbench/', icon: 'laptop-outline' },
        { name: 'MySQL Database Design by Udemy', url: 'https://www.udemy.com/topic/mysql-database-design/', icon: 'book-outline' },
        { name: 'MySQL Fundamentals by edX', url: 'https://www.edx.org/learn/mysql', icon: 'school-outline' },
        { name: 'MySQL Basics by GeeksforGeeks', url: 'https://www.geeksforgeeks.org/mysql-introduction/', icon: 'code-slash-outline' },
        { name: 'MySQL Cheat Sheet', url: 'https://www.mysql.com/products/community/', icon: 'document-outline' },
        { name: 'MySQL Workbench Tutorials by MySQLTutorial.org', url: 'https://www.mysqltutorial.org/mysql-workbench-tutorial.aspx', icon: 'hammer-outline' },
        { name: 'MySQL Programming Examples', url: 'https://www.mysqltutorial.org/mysql-sample-databases.aspx', icon: 'code-slash-outline' },
      ],
      
    'Node.js Basics': [
      { name: 'Node.js Docs', url: 'https://nodejs.org/en/docs/', icon: 'document-outline' },
      { name: 'Node.js Tutorial', url: 'https://www.tutorialspoint.com/nodejs/index.htm', icon: 'book-outline' },
      { name: 'Node.js Beginner Guide', url: 'https://www.w3schools.com/nodejs/', icon: 'laptop-outline' },
      { name: 'Node.js Basics by Codecademy', url: 'https://www.codecademy.com/learn/introduction-to-node-js', icon: 'book-outline' },
      { name: 'Node.js for Beginners by Coursera', url: 'https://www.coursera.org/specializations/server-side-nodejs', icon: 'school-outline' },
      { name: 'Node.js Crash Course by Traversy Media', url: 'https://www.youtube.com/watch?v=fBNz5xF-Kx4', icon: 'play-circle-outline' },
      { name: 'Node.js Fundamentals by edX', url: 'https://www.edx.org/learn/node-js', icon: 'school-outline' },
      { name: 'Node.js Basics by The Net Ninja', url: 'https://netninja.dev/p/node-js-crwn-clothing', icon: 'play-circle-outline' },
      { name: 'Node.js Introduction by Udemy', url: 'https://www.udemy.com/topic/node-js/', icon: 'book-outline' },
      { name: 'Node.js Programming Examples', url: 'https://www.programiz.com/nodejs', icon: 'code-slash-outline' },
    ],
    'Docker Basics': [
      { name: 'Docker Docs', url: 'https://docs.docker.com/', icon: 'document-outline' },
      { name: 'Docker Tutorial', url: 'https://www.tutorialspoint.com/docker/index.htm', icon: 'book-outline' },
      { name: 'Docker Basics by Dockerize Apps', url: 'https://dockerizeapps.com/docker-basics', icon: 'laptop-outline' },
      { name: 'Docker Fundamentals by Docker Mastery', url: 'https://www.udemy.com/course/docker-mastery/', icon: 'school-outline' },
      { name: 'Docker for Beginners by Udemy', url: 'https://www.udemy.com/topic/docker/', icon: 'book-outline' },
      { name: 'Docker Crash Course by Traversy Media', url: 'https://www.youtube.com/watch?v=Kyx2PsuwomE', icon: 'play-circle-outline' },
      { name: 'Docker Basics by Codecademy', url: 'https://www.codecademy.com/learn/learn-docker', icon: 'book-outline' },
      { name: 'Docker Essentials by edX', url: 'https://www.edx.org/learn/docker', icon: 'school-outline' },
      { name: 'Docker Basics by GeeksforGeeks', url: 'https://www.geeksforgeeks.org/docker-tutorial/', icon: 'code-slash-outline' },
      { name: 'Docker Programming Examples', url: 'https://www.tutorialspoint.com/docker/docker_quick_guide.htm', icon: 'code-slash-outline' },
    ],
  };
  
  
  const openWebPage = (url) => {
    Linking.openURL(url);
  };



  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{selectedItem}</Text>
      {resources[selectedItem].map((resource) => (
        <TouchableOpacity
          key={resource.name}
          onPress={() => openWebPage(resource.url)}
          style={styles.resourceItem}
        >
          <View style={styles.resourceBox}>
            <Ionicons name={resource.icon} size={32} color="#007BFF" />
            <Text style={styles.resourceName}>{resource.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff' 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resourceItem: {
    marginBottom: 10,
  },
  resourceBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  resourceName: {
    marginLeft: 16,
    fontSize: 18,
    color: '#333',
    maxWidth:'60%'

  },
});

export default ResourceOptions;

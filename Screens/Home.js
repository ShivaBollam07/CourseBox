import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Icon, Overlay, Button } from 'react-native-elements';
import Courses from './Courses';
import LearningPaths from './LearningPaths';
import Reading from './Reading';
import Recommend from './Recommend';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons

// ... (other imports)

const Home = ({ route, navigation }) => {
  const [showProfileOverlay, setShowProfileOverlay] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState('********');

  const toggleProfileOverlay = () => {
    setShowProfileOverlay(!showProfileOverlay);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setPasswordVisible(showPassword ? '********' : route.params.password || 'userpassword');
  };

  const signOut = () => {
    // Delay the navigation by 2 seconds
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000); // 2000 milliseconds = 2 seconds
  };

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.companyLogo}>CourseBox</Text>
            <TouchableOpacity style={styles.profileIconContainer} onPress={toggleProfileOverlay}>
              <Ionicons
                name="ios-person-circle"
                size={30}
                color={'black'}
                style={styles.profileIcon}
              />
            </TouchableOpacity>
          </View>

          <Overlay isVisible={showProfileOverlay} onBackdropPress={toggleProfileOverlay} overlayStyle={styles.overlay}>
            <View style={styles.profileOverlay}>
              <Text style={styles.overlayText}>Email: {route.params.email || 'user@example.com'}</Text>
              <Text style={styles.overlayText}>Password: {showPassword ? passwordVisible : '********'}</Text>
              <Button
                title={showPassword ? 'Hide Password' : 'Show Password'}
                onPress={togglePasswordVisibility}
                buttonStyle={styles.overlayButton}
                titleStyle={styles.overlayButtonText}
                icon={
                  <Ionicons
                    name={showPassword ? 'ios-eye-off' : 'ios-eye'}
                    size={18}
                    color="#FFFFFF"
                    style={styles.icon}
                  />
                }
              />
              
            </View>
          </Overlay>
        </View>

        <View>
          <Courses />
        </View>
        <View>
          <LearningPaths />
        </View>
        <View>
          <Reading />
        </View>
        <View>
          <Recommend />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 60 : 40,
    paddingHorizontal: 10,
    alignContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    paddingVertical: 10, // Added padding for the header
  },
  companyLogo: {
    fontSize: 30,
    color: '#00539C', // Updated color to blue
  },
  profileIconContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  profileIcon: {
    marginRight: 10,
  },
  overlay: {
    backgroundColor: 'transparent', // Removed white box around the overlay
  },
  profileOverlay: {
    padding: 20,
    backgroundColor: '#EEA47F', // Updated color to peach
    borderRadius: 10,
  },
  overlayText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 10,
  },
  overlayButton: {
    backgroundColor: '#E2D1F9', // Updated color to lavender
    borderRadius: 5,
    marginVertical: 5,
  },
  signOutButton: {
    backgroundColor: '#317773', // Updated color to teal
    borderRadius: 5,
    marginVertical: 5,
  },
  overlayButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 10,
  },
});

export default Home;
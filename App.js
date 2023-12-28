import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screens/Login';
import Home from './Screens/Home';
import CourseDetail from './Screens/CourseDetail';
import Content from './Screens/Content';
import PdfViewer from './Screens/PdfViewer'; // Import your PdfViewer component
import ResourceOptions from './Screens/ResourceOptions';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: true }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen
          name="CourseDetail"
          component={CourseDetail}
          options={{ title: 'Course Details' }}
        />
        <Stack.Screen
          name="Content"
          component={Content}
          options={{ title: 'Content' }}
        />
        <Stack.Screen
          name="PdfViewer" 
          component={PdfViewer}
          options={{ title: 'PDF Viewer' }}
        />
        <Stack.Screen
        name="ResourceOptions"
        component={ResourceOptions}
        options={{ title: 'Learning Resources' }}
      />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

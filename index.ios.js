// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// create a component - js function that returns JSX
// Header component nested in App
const App = () => (
    <Header headerText={'Albums'} />
);



// render it to the device - run component to display on screen
// 1st arg is name of project
// 2nd ag is first component to render to application
AppRegistry.registerComponent('albums', () => App);


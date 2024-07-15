import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Stack = createStackNavigator();

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn.glitch.global/329145d3-e63d-4380-a7c9-94ca08c159a2/IMG_1721039746252_1721039937740.jpg?v=1721040775165' }}
        style={styles.image}
      />
      <Text style={styles.title}>Welcome to our store</Text>
      <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn.glitch.global/329145d3-e63d-4380-a7c9-94ca08c159a2/IMG_1721039751426_1721039942776.jpg?v=1721040796011' }}
        style={styles.image}
      />
      <Text style={styles.title}>Get your groceries with nectar</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone number"
        keyboardType="phone-pad"
      />
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesomeIcon icon={faGoogle} size={20} color="#fff" />
          <Text style={styles.socialButtonText}> Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
          <FontAwesomeIcon icon={faFacebook} size={20} color="#fff" />
          <Text style={styles.socialButtonText}> Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '50%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  input: {
    width: '80%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
  },
  socialContainer: {
    marginTop: 20,
  },
  socialButton: {
    backgroundColor: '#4285F4',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;

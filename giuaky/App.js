import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet,Image, TouchableOpacity, ImageBackground,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: 'https://cdn.glitch.global/329145d3-e63d-4380-a7c9-94ca08c159a2/IMG_1721039746252_1721039937740.jpg?v=1721040775165' }}
      style={styles.image}
    >
    <View style={styles.overlay}>
     <Image style={styles.icon} source={{uri: 'https://cdn.glitch.global/329145d3-e63d-4380-a7c9-94ca08c159a2/carrot-icon.png?v=1721045424781'}} />
        <Text style={styles.title}>Welcome to our store</Text>
        <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://cdn.glitch.global/329145d3-e63d-4380-a7c9-94ca08c159a2/IMG_1721039751426_1721039942776.jpg?v=1721040796011' }}
        style={styles.image}
      >
        <View style={styles.overlay}>
          <Text style={styles.title1}>Get your groceries with nectar</Text>
          <TextInput
            style={styles.input}
            placeholder="+880"
            keyboardType="phone-pad"
          />
          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Icon name="google" size={30} color="#fff" />
              <Text style={styles.socialButtonText}> Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
              <Icon name="facebook" size={30} color="#fff" />
              <Text style={styles.socialButtonText}> Continue with Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
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
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  icon: {
    width: 50,
    height: 50,
  },
  overlay: {
  flex: 1,
  justifyContent:'flex-end',
  alignItems: 'center',
  marginBottom:100
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginVertical: 20,
  },
  title1:{
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
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
    borderColor: '#fff',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderBottomColor: '#000', // Màu xám nhạt của đường viền dưới
    borderBottomWidth: 1, // Độ dày của đường viền dưới
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 20,
  },
  socialContainer: {
    marginTop: 20,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    padding: 15,
    borderRadius: 5,
    textAlign: 'center',
    marginVertical: 10,
    width: '90%',
    justifyContent: 'center',
  },
  facebookButton: {
    backgroundColor: '#3b5998',
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 17,
    marginLeft: 10,
    width: '65%',
  },
});

export default App;
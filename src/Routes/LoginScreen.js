import React, { Component } from 'react';
import { StyleSheet, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import firebase from 'react-native-firebase';
import { ScrollView } from 'react-native-gesture-handler';

class LogInScreen extends Component {
  state = {
    email: '',
    password: '',
    isAuthenticated: false,
  };

  login = async () => {

    try {

      const { email, password } = this.state;

      const user = await firebase.auth()
        .signInWithEmailAndPassword(email, password);

      this.setState({ isAuthenticated: true });
      this.props.navigation.navigate('Welcome');

    } catch (error) {
      alert('Usuário e/ou senha inválidos');
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image source={require('../Images/logoInicial.jpg')} style={[styles.logo]} />

          <TextInput style={styles.input}
            placeholder='email'
            values={this.state.email}
            keyboardType={'email-address'}
            autoCapitalize={'none'}
            autoCorrect={false}
            returnKeyType='next'
            onChangeText={email => this.setState({ email })}
            autoFocus={true}
          />

          <TextInput style={styles.input}
            placeholder='senha'
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />

          <TouchableOpacity style={styles.button} onPress={this.login} >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonFazerCadastro} onPress={() => this.props.navigation.navigate('SignUp')} >
            <Text style={styles.buttonTextCad}>Sou novo aqui, fazer cadastro.</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const Login = {

};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    height: 160,
    margin: 20,
    padding: 15,
    width: 150,
  },
  input: {
    height: 45,
    backgroundColor: '#FFF',
    alignSelf: 'stretch',
    borderColor: '#EEE',
    borderWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    height: 45,
    backgroundColor: '#20b2aa',
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  buttonFazerCadastro: {
    height: 45,
    backgroundColor: '#FFF',
    alignSelf: 'center',
  },
  buttonTextCad: {
    color: 'grey',
    fontWeight: 'bold'
  }
});

LogInScreen.navigationOptions = {
  title: 'Entrar',
}

export default LogInScreen;

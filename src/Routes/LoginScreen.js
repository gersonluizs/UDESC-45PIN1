import React from 'react';
import { StyleSheet, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

const LogIn = ({navigation}) => (
  <View style={styles.container}>
    <Image source={require('../Images/logoInicial.jpg')} style={[styles.logo]} />

    <TextInput style={styles.input}
      placeholder = 'email'
      values = {this.email}
      onChangeText = {email => this.emailsetState({ email })}
    />

    <TextInput style={styles.input}
      placeholder='senha'
      value={this.password}
      onChangeText={password => this.setState({ password })}
    />

    <TouchableOpacity style={styles.button} onPress={this.login} >
      <Text
        style={styles.buttonText}
        onPress={() => navigation.navigate('Welcome')}
      >
        ENTRAR
            </Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonFazerCadastro} onPress={ () => navigation.navigate('SignUp') } >
      <Text style={styles.buttonTextCad}>Sou novo aqui, fazer cadastro.</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    height: 160,
    marginBottom: 80,
    marginTop: 64,
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
    marginTop: 30,
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
    marginTop: 40,
    backgroundColor: '#FFF',
    alignSelf: 'center',
  },
  buttonTextCad: {
    color: 'grey',
    fontWeight: 'bold'
  }
});

LogIn.navigationOptions = {
  title: 'Entrar',
}

export default LogIn;

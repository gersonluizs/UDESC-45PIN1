import React, { Component } from 'react';
import { TouchableOpacity, View, StyleSheet, TextInput, ScrollView, Text } from 'react-native';
import firebase from 'react-native-firebase';

class SignUpScreen extends Component {
  state = {
    nome: '',
    email: '',
    password: '',
    confirmPassword: '',
    isAuthenticated: false,
  }

  SignUp = async () => {

    try {

      const { email, password } = this.state;

      const user = await firebase.auth()
        .createUserWithEmailAndPassword(email, password);

      this.setState({ isAuthenticated: true });
      this.props.navigation.navigate('Welcome');

    } catch (error) {
      alert('Ocorreu um erro ao inserir o usuário, tente novamente');
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>

          <TextInput style={styles.input}
            placeholder='Digite seu nome'
            values={this.state.nome}
            onChangeText={nome => this.setState({ nome })}
          />

          <TextInput style={styles.input}
            placeholder='Digite seu email'
            values={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
          <TextInput style={styles.senha}
            placeholder='Digite sua senha'
            secureTextEntry={true}
            values={this.state.password}
            onChangeText={password => this.setState({password})}
          />
          <TextInput style={styles.Confsenha}
            placeholder='Confirme sua senha'
            secureTextEntry={true}
            values={this.state.confirmPassword}
            onChangeText={confirmPassword => this.setState({confirmPassword})}
          />


          <TouchableOpacity style={styles.button} onPress={this.SignUp} >
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
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
  senha: {
    height: 45,
    backgroundColor: '#FFF',
    alignSelf: 'stretch',
    borderColor: '#EEE',
    borderWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  Confsenha: {
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
  }
});

SignUpScreen.navigationOptions = {
  title: 'Sou novo aqui',

}

export default SignUpScreen;
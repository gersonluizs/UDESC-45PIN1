import React from 'react';
import { TouchableOpacity, View, StyleSheet, TextInput, ScrollView, Text } from 'react-native';

var nome = '',
  sobrenome = '',
  email = '',
  password = '',
  confirmPassword = '';

const SignUp = () => (
  <ScrollView>
    <View style={styles.container}>

      <TextInput style={styles.input}
        placeholder='Digite seu nome'
        values={nome}
        onChangeText={nome => nome}
      />

      <TextInput style={styles.input}
        placeholder='Digite seu sobrenome'
        values={sobrenome}
        onChangeText={sobrenome => sobrenome}
      />
      <TextInput style={styles.input}
        placeholder='Digite seu email'
        values={email}
        onChangeText={email => email}
      />
      <TextInput style={styles.senha}
        placeholder='Digite sua senha'
        values={password}
        onChangeText={password => password}
      />
      <TextInput style={styles.Confsenha}
        placeholder='Confirme sua senha'
        values={confirmPassword}
        onChangeText={confirmPassword => confirmPassword}
      />


      <TouchableOpacity style={styles.button} onPress={this.values} >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

    </View>
  </ScrollView>
);

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

SignUp.navigationOptions = {
  title: 'Sou novo aqui',

}

export default SignUp;
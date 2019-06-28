import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';

export default class ComparadorScreen extends Component {
    state = {
        cod: '',
        nome: '',
        descricao: '',
    };

    cadastrar = () => {
        console.log(this.state)
    };

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>

                    <TextInput style={styles.input}
                        placeholder='Produto 1R$ 8,59/UN'
                        values={this.state.cod}
                        onChangeText={cod => this.setState({ cod })}
                    />

                    <TextInput style={styles.input}
                        placeholder='Produto 2: R$ 9,99/UN'
                        values={this.state.nome}
                        onChangeText={nome => this.setState({ nome })}
                    />
                    <TextInput style={styles.input}
                        placeholder='Produto 3: R$ 10,19/UN'
                        values={this.state.descricao}
                        onChangeText={descricao => this.setState({ descricao })}
                    />


                    <TouchableOpacity style={styles.button} onPress={this.cadastrar} >
                        <Text style={styles.buttonText}>Add Cart</Text>
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

ComparadorScreen.navigationOptions = {
    title: 'Comparador',

}

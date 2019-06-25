import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, TextInput, TouchableOpacity, Picker } from 'react-native';

export default class ProdutoScreen extends Component {
    state = {
        codbarras: '',
        marca: '',
        nome: '',
        unidadeMedida: '',
    };

    cadastrarProduto = () => {
        console.log(this.state)
    };

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>

                    <TextInput style={styles.input}
                        placeholder='Cód. Barras'
                        values={this.state.codbarras}
                        onChangeText={codbarras => this.setState({ codbarras })}
                    />

                    <TextInput style={styles.input}
                        placeholder='Marca'
                        values={this.state.marca}
                        onChangeText={marca => this.setState({ marca })}
                    />
                    <TextInput style={styles.input}
                        placeholder='Nome produto'
                        values={this.state.nome}
                        onChangeText={nome => this.setState({ nome })}
                    />
                    <Picker
                        selectedValue={this.state.unidadeMedida}
                        style={styles.picker}
                        onValueChange={(itemValue) =>
                            this.setState({ unidadeMedida: itemValue })
                        }>
                        <Picker.Item label="Selecione..." value="0" />
                        <Picker.Item label="UN" value="un" />
                        <Picker.Item label="Kg" value="Kg" />
                    </Picker>


                    <TouchableOpacity style={styles.button} onPress={this.cadastrarProduto} >
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
    picker: {
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

ProdutoScreen.navigationOptions = {
    title: 'Produto',

}

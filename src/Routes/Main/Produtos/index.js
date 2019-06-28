import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, TextInput, Button, TouchableOpacity, Picker, FlatList } from 'react-native';
import firebase from 'react-native-firebase';
import Produto from './Produto';
import Todo from './Todo';


class ProdutoScreen extends Component {
    constructor() {
        super();
        this.ref = firebase.firestore().collection('produtos');
        this.unsubscribe = null;

        this.state = {
            codbarras: '',
            marca: '',
            nome: '',
            loading: true,
            produtos: [],
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const produtos = [];
        querySnapshot.forEach((doc) => {
            const { codbarras, marca, nome } = doc.data();

            produtos.push({
                key: doc.id,
                doc,
                codbarras,
                marca,
                nome,
            });
        });

        this.setState({
            produtos,
            loading: false,
        });
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    addProduto() {
        this.ref.add({
            codbarras: this.state.codbarras,
            marca: this.state.marca,
            nome: this.state.nome,
        });

        this.setState({
            codbarras: '',
            marca: '',
            nome: '',
        });

    }

    updateCodBarras(value) {
        this.setState({ codbarras: value });
        console.log(this.state.codbarras);
    }

    updateMarca(value) {
        this.setState({ marca: value });
    }

    updateNome(value) {
        this.setState({ nome: value });
    }


    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <FlatList
                        data={this.state.todos}
                        renderItem={({ item }) => <Todo {...item} />}
                    />

                    <TextInput style={styles.input}
                        placeholder='Cód. Barras'
                        values={this.state.codbarras}
                        onChangeText={(text) => this.updateCodBarras(text)}
                    />

                    <TextInput style={styles.input}
                        placeholder='Marca'
                        values={this.state.marca}
                        onChangeText={(text) => this.updateMarca(text)}
                    />
                    <TextInput style={styles.input}
                        placeholder='Nome produto'
                        values={this.state.nome}
                        onChangeText={(text) => this.updateNome(text)}
                    />

                    <TouchableOpacity style={styles.button} onPress={() => this.addProduto()} >
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>

                    <FlatList
                        data={this.state.produtos}
                        renderItem={({ item }) => console.log(item)}
                    />

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

export default ProdutoScreen;
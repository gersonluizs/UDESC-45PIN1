import React, {Component} from 'react';
import firebase from 'react-native-firebase';
import { ScrollView, View, Text, TextInput, Button, FlatList } from 'react-native';
import Todo from './Todo'; // we'll create this next

class Cadastro extends Component {
    constructor() {
        super();
        this.ref = firebase.firestore().collection('todos');
        this.unsubscribe = null;
      
        this.state = {
            textInput: '',
            loading: true,
            todos: [],
        };
    }

onCollectionUpdate = (querySnapshot) => {
  const todos = [];
  querySnapshot.forEach((doc) => {
    const { title, complete } = doc.data();
    
    todos.push({
      key: doc.id,
      doc, // DocumentSnapshot
      title,
      complete,
    });
  });

  this.setState({ 
    todos,
    loading: false,
 });
}
    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate) 
    }
    
    componentWillUnmount() {
        this.unsubscribe();
    }

  updateTextInput(value) {
    this.setState({ textInput: value });
  }

  addTodo() {
    this.ref.add({
      title: this.state.textInput,
      complete: false,
    });
  
    this.setState({
      textInput: '',
    });
  }
  
  render() {
    if (this.state.loading) {
        return null; // or render a loading icon
    }
    return (
        <View style={{ flex: 1 }}>
            <FlatList
              data={this.state.todos}
              renderItem={({ item }) => <Todo {...item} />}
            />
            <TextInput
                placeholder={'Add TODO'}
                value={this.state.textInput}
                onChangeText={(text) => this.updateTextInput(text)}
            />
            <Button
                title={'Add TODO'}
                disabled={!this.state.textInput.length}
                onPress={() => this.addTodo()}
            />
        </View>
      );
  }
}

export default Cadastro;
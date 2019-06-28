import React from 'react';
import { View, Text } from 'react-native';

export default class Produto extends React.PureComponent {

    render() {
        return (
          <View style={{ flex: 1, height: 48, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 8 }}>
                <Text>{this.props.nome}</Text>
            </View>
        </View>
        );
    }
}
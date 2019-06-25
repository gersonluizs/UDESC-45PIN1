import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Welcome = ({ navigation }) => (
  <View>
    <Text style={styles.Text}>
      Bem vindxs!
Este é o "Preço Certo", seu app de busca
de mercadorias com os MENORES PREÇOS da região!
Aqui você pode pesquisar o produto pelo nome,
pelo código de barras ou por marca,
que traremos os itens relacionados e os
MENORES PREÇOS nos mercados cadastrados.
Proporcionando mais economia e praticidade na sua vida.
      </Text>
  </View>
);

const styles = StyleSheet.create({
  Text: {
    fontSize: 22,
    justifyContent: 'center'
  }
})

Welcome.navigationOptions = {
  title: 'Boas Vindas',
}
export default Welcome;
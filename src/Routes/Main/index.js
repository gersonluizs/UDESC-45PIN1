import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Produtos from './Produtos';


const TabNavigator = createBottomTabNavigator({
  Produtos: Produtos,
  Comparador: Produtos,
  Ofertas: Produtos,
  Estabelecimentos: Produtos,
  Profile: Produtos,
},{
    navigationOptions: ({navigation}) =>{
        const { routeName } = navigation.state.routes[navigation.state.index];
        return {
            headerTitle: routeName
        }
    }
});

export default createAppContainer(TabNavigator);
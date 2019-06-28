import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Produtos from './Produtos';
import Ofertas from './Ofertas';
import Profile from './Profile';
import Comparador from './Comparador';


const TabNavigator = createBottomTabNavigator({
  Produtos: Produtos,
  Comparador: Comparador,
  Ofertas: Ofertas,
  Estabelecimentos: Produtos,
  Profile: Profile,
},{
    navigationOptions: ({navigation}) =>{
        const { routeName } = navigation.state.routes[navigation.state.index];
        return {
            headerTitle: routeName
        }
    }
});

export default createAppContainer(TabNavigator);
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home1 from '../layout/Home1';
import Home3 from '../layout/Home3';

const Tab = createBottomTabNavigator();
function Top() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Mh1" component={Home1} />
        <Tab.Screen name="Mh2" component={Home3} />
      </Tab.Navigator>
    );
  }
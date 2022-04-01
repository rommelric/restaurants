import { createStackNavigator } from '@react-navigation/stack'

import Restaurants from '../screens/Restaurants'

const Stack = createStackNavigator()

export default function RestaurantsStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="restaurants1"
            component={Restaurants}
            options={{ title: "RestaurantesStack" }}
        />
            
    </Stack.Navigator>
  )
}

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profile from '../screen/Profile';
import EditProfile from '../screen/EditProfile';

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen 
        name="home" 
        component={Profile} 
      />
      <Stack.Screen
        name="editprofile"
        component={EditProfile}
      />
    </Stack.Navigator>
  );
}
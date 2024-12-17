import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from './presentation/navigation/StackNavigator';
import { Text } from 'react-native';
import { PermissionsChecker } from './presentation/providers/PermissionsChecker';

export const MapsApp = () => {

  return (
    <NavigationContainer>
      <PermissionsChecker>
        <StackNavigator />
      </PermissionsChecker>
    </NavigationContainer>
  )
}
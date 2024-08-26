import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, } from '@react-navigation/drawer';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { StackNavigator } from './StackNavigator';
import { globalColors } from '../themes/theme';
import { Text, useWindowDimensions, View } from 'react-native';
import { BottomTabsNavigator } from './BottomTabsNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {

  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator

    drawerContent={(props) => <CustomDrawerContent{...props}/>}


    screenOptions={{
      headerShown: false,
      drawerType: dimensions.width >= 758 ? 'permanent' : 'slide',

      drawerActiveBackgroundColor: globalColors.primary,
      drawerActiveTintColor: 'white',
      drawerInactiveTintColor: globalColors.primary,
      drawerItemStyle:{
        borderRadius: 100,
        paddingHorizontal: 20
      }

    }}
    >
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen options={{ drawerIcon: ({ color }) => ( <IonIcon name="book-outline" color={ color }/>)}} name="Tabs" component={BottomTabsNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}


const CustomDrawerContent = (props:DrawerContentComponentProps) => {


  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          backgroundColor: globalColors.primary,
          margin: 30,
          borderRadius: 50,

        }}
      />

        <Text>Hola Mundo</Text>
        <DrawerItemList {...props}/>
    </DrawerContentScrollView>

  )
}
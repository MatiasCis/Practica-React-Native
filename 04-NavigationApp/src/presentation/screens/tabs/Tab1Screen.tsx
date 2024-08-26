import { View, Text } from 'react-native'
import { HamburgerMenu } from '../../components/shared/HamburgerMenu'
import Icon from 'react-native-vector-icons/Ionicons';
import { IonIcon } from '../../components/shared/IonIcon';


export const Tab1Screen = () => {

  // const navigation = useNavigation();

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <Pressable onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer)}>
  //         <Text>Menú</Text>
  //       </Pressable>
  //     )
  //   });
  // }, []);
  


  return (
    <View>
      
      <IonIcon name='rocket-outline'/>

    </View>
  )
}

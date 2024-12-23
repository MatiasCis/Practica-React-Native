import { Layout, Text, Button, Icon } from '@ui-kitten/components'
import { useAuthStore } from '../../../store/auth/useAuthStore';


export const HomeScreen = () => {

  const {logout} = useAuthStore();

  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
        <Text>HomeScree</Text>
        <Button 
        onPress={ logout }
        accessoryLeft={<Icon name="lock-outline"/>}
        >
          Cerrar sesión
        </Button>
    </Layout>
  )
}
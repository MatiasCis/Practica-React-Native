import React from 'react'
import { View, Text } from 'react-native'
import { globalStyles } from '../../themes/theme'
import { StackActions, useNavigation } from '@react-navigation/native'
import { PrimaryButton } from '../../components/shared/PrimaryButton'

export const SettingsScreen = () => {

  const navigator = useNavigation();


  return (
    <View style={globalStyles.container}>


        <Text style={{ marginBottom: 10}}>SettingsScreen</Text>

        <PrimaryButton label="Regresar" onPress={ () => navigator.goBack()}/>

        <PrimaryButton label="Regresar al Home" onPress={ () => navigator.dispatch(StackActions.popToTop)}/>


    </View>
  )
}

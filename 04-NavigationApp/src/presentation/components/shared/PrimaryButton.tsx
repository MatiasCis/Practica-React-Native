import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { globalStyles } from '../../themes/theme'


interface Props{
    onPress:() => void;
    label: string;
}


export const PrimaryButton = ({ onPress, label}: Props) => {



  return (
    <Pressable onPress={ () => onPress()}
         style={globalStyles.primaryButton}>
        <Text style={globalStyles.buttonText}>{label}</Text>  
    </Pressable>
  )
}

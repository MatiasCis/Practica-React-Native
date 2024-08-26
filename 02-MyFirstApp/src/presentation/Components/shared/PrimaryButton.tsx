import React from 'react'
import { Platform, Pressable, StyleSheet, Text } from 'react-native'


interface Props {
    label: string;
    onPress: () => void;
    onLongPress?: () => void;
}

export const PrimaryButton = ( {label, onPress, onLongPress}:Props) => {


    

    
  return (
        <Pressable 
            onPress={ () => onPress && onPress() }
            onLongPress={ () => onLongPress && onLongPress()}
            style={ ( { pressed} ) => [
                styles.button,
                pressed && styles.buttonPressed
            ] }
        >
            <Text style={{color: Platform.OS === 'android' ? 'black' : 'blue' }}>{label}</Text>
        </Pressable>



        // <Pressable
        //  onPress={ () => onPress && onPress() }
        // onLongPress={ () => onLongPress && onLongPress()}
        // style={ ( { pressed} ) => [
        //     styles.buttonI, 
        //     pressed && styles.buttonPressedI
        // ] }
        // >
        //     
        // </Pressable>
        
        // <Pressable onPress={ () => onPress && onPress()}
        // onLongPress={ () => onLongPress && onLongPress()}
        // style={( {pressed} ) => [styles.buttonD, pressed && styles.buttonPressedD]}
        // >
        //     <Text style={{color:'white'}}>Disminuir</Text>
        // </Pressable>
  )
}
const styles = StyleSheet.create({
    button:{
        backgroundColor: Platform.OS === 'android' ? '#2AFF00': '#0099ff',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonPressed:{
        backgroundColor:Platform.OS === 'android' ? '#b80612' : '#fbff00',
    }
  })
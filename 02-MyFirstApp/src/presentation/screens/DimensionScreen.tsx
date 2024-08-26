import React from 'react'
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import {Dimensions} from 'react-native';

// const {width, height} = Dimensions.get('window')

export const DimensionScreen = () => {
    const {width, height}= useWindowDimensions();

  return (
    <View>
        <View style={style.container}>
            <View style={{...style.purpleBox,
                width: width * 0.5
            }}/>

            
        </View>

            <Text style={style.title}>
                w: {width}, h: {height}
            </Text>

    </View>
  )
}
const style = StyleSheet.create({
    container :{
        backgroundColor: 'red',
        width: 300,
        height: 300,

    },
    purpleBox:{
        height: '50%',
        backgroundColor:'#5856D6',
        width:'50%'
    },
    title:{
        fontSize:30,
        textAlign: 'center'

    }
})
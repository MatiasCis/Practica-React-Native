import { View, Text, StyleSheet } from "react-native"


export const BoxObjectModelScreen = () => {
  return (
        <View style={style.container}>
            {/* <Text style={style.title}>
                BoxObjectModelScreen
            </Text> */}
            <View style={style.purpleBox}> 
                    <Text style={{color:'white'}}>Hola Mundo</Text>
            </View>
        </View>
        
  )
}

const style = StyleSheet.create({
    container :{
        backgroundColor: 'red',
        flex: 1,
    }, 
    title:{
        fontSize: 30, 
        borderWidth: 10,
        paddingHorizontal: 30,
        paddingVertical: 10
    },
    purpleBox:{
        height: 30,
        backgroundColor:'purple',
        // margin: 20,
        marginHorizontal: 20,
        marginVertical: 50,
        padding:5
    }

    
})
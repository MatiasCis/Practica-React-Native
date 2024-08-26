import { useNavigation, DrawerActions } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Pressable, Text, View } from 'react-native';
import { IonIcon } from './IonIcon';




export const HamburgerMenu = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
            <Pressable style={{marginLeft:5}} onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer)}>
                
                <IonIcon name='menu-outline'/>
            </Pressable>
            )
        });
        }, []);


    return (
        <></>
    )
    }

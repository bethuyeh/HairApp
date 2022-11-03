import React from 'react'
import { StyleSheet, Dimensions } from "react-native";


const win = Dimensions.get('window');

const Style = StyleSheet.create({
        image: {
            alignSelf: 'stretch',
            width: win.width,
            
        },

        page: {
            alignSelf: 'stretch',
            height: win.height,
            
        },

        shadowProp: {
            shadowColor: 'black',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 1,
            shadowRadius: 3,
          },
})

export default Style;
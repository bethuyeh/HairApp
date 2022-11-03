import { Box, Text, View } from 'native-base'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import HomeProducts from '../Components/HomeProducts'
import HomeSearch from '../Components/HomeSearch'

const HomeScreen = () => {
  return (
        <Box flex={1} bg={Colors.main} >
          <HomeSearch/>
          <HomeProducts/>
        </Box>
  )
}

export default HomeScreen
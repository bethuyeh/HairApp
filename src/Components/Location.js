import { Box, Text, Center } from 'native-base'
import React from 'react'
import MapView from 'react-native-maps'
import Style from './Style'



// import { height } from '@mui/system'

// const ASPECT_RATIO = width / height;
// const LATITUDE_DELTA = 0.02
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
// const INITIAL_POSITION = {
//     latitude: 40.767110,
//     longitude: -73.97904,
//     latitudeDelta: LATITUDE_DELTA,
//     longitudeDelta: LONGITUDE_DELTA
// }  

const Location = () => {


  return (
    <Box flex={1} mt={6} alignItems="center" justifyContent="center">
  
        <MapView 
            style={Style.map} 
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
        ></MapView>

    {/* <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'YOUR API KEY',
        language: 'en',
      }}
    /> */}
    </Box>
  )
}

export default Location
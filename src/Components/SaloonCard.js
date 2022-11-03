import { Box, VStack, HStack, Text, Image } from 'native-base'
import React from 'react'
import Emoji from 'react-native-emoji';
import { MaterialIcons } from '@expo/vector-icons';
import Style from './Style';

const SaloonCard = (props) => {
  return (
   
        <VStack safeAreaTop px={4} py={3} > 
        <HStack rounded="20%" borderColor="cyan.500" borderWidth="1" w="full" py={3} px={4} >
      <Image
        p={3} 
        mt={1}                
        source={props.image}
        alt="Logo"
        size="100"
        resizeMode="cover"
        />
        
        <Box pl={3} >
            <Text fontSize="md" fontWeight="600" color="#1AC0CC">{props.name}</Text>
            
            <Text>{props.location}</Text>
            
          <HStack mt={1}>
          <MaterialIcons name="location-pin" size={20} color="#1AC0CC" />
            <Text>{props.distance}</Text>
          </HStack>
            
            <HStack mt={1.5} pr="2">  
                <Emoji name="star" style={{fontSize: 13}}/>
                <Text>{props.rating}</Text> 
            </HStack>

          
        </Box>
        </HStack>
        </VStack>
        

  )
}

export default SaloonCard
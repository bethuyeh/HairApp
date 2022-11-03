import { Box, Text, HStack } from 'native-base'
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import React from 'react'

const Bottom = () => {
  return (
    <HStack mt={6} justifyContent="space-between">
                <Box>
                  <AntDesign name="home" size={25} color="#1AC0CC" />
                  <Text
                    textAlign="center"
                    fontSize="sm"
                    color="#1AC0CC"
                  >Home</Text>
                </Box>

                <Box> 
                <AntDesign name="book" size={25} color="#1AC0CC" />
                <Text
                    textAlign="center"
                    fontSize="sm"
                    color="#1AC0CC"
                  >Booking</Text>
                </Box>

                <Box>
                <FontAwesome name="reorder" size={25} color="#1AC0CC" />
                <Text
                    textAlign="center"
                    fontSize="sm"
                    color="#1AC0CC"
                  >Orders</Text>
                </Box>
                </HStack>
  )
}

export default Bottom
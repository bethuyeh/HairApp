import { Box, HStack, Image, Text } from 'native-base'
import React from 'react'

const FirstCard = (props) => {
  return (
  
        <HStack mt="2">
                <Box mt='1' mr="3">
                  <Box borderColor="cyan.500" borderWidth="4" rounded="10%" p="2" px={3}>
                    <Image
                    p={3} 
                    mt={2}                
                    source={props.image}
                    alt="Logo"
                    size="50"
                    resizeMode="cover"
                    />
                  </Box>
                  <Text
                    fontWeight="500"
                    textAlign="center"
                  >{props.Text}</Text>
                  </Box>
                  </HStack>

  )
}

export default FirstCard
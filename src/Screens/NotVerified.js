import { Box, Image, Center, VStack } from 'native-base'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import ButtonNew from '../Components/Button'

const NotVerified = () => {
    return (
        <Box flex={1} bg={Colors.main} safeAreaTop>
            <Center w="full" h={250} bg={Colors.blue}>
                <Image 
                source={require("../../assets/favicon.png")}
                alt="Logo"
                size="lg"
                />
            </Center>
            <VStack space={6} px={5} alignItems="center"></VStack>
            <ButtonNew bg={Colors.black} color={Colors.white}>REGISTER</ButtonNew>
            <ButtonNew bg={Colors.black} color={Colors.white}>REGISTER</ButtonNew>
        </Box>
  )
}

export default NotVerified
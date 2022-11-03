import { Box, Center, Text } from 'native-base'
import ButtonNew from "./ButtonNew"
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import {FontAwesome} from "@expo/vector-icons"

const CartEmpty = () => {
  return (
    <Box flex={1}>
        <Center h='90%' px={4}>
            <Center w={200} h={200} bg={Colors.white} rounded='full'>
                <FontAwesome name="shopping-basket" size={64} color={Colors.main}/>
            </Center>

            <Text color={Colors.main} bold mt={5}>
                CART IS EMPTY
            </Text>
        </Center>

        <ButtonNew bg={Colors.black} color={Colors.white}>
            SHOP NOW
        </ButtonNew>
    </Box>
  )
}

export default CartEmpty
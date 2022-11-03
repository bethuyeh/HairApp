import { useNavigation } from '@react-navigation/native'
import { Button, Center, HStack, ScrollView, Text } from 'native-base'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import CartEmpty from '../Components/CartEmpty'
import CartItems from '../Components/CartItems'

const CartScreen = () => {

    const navigation = useNavigation()

    
    return (
        <Box flex={1} safeAreaTop bg={Colors.subGreen} >
        {/* {Header} */}
            <Center w="full" py={5}>
                <Text color={Colors.black} fontSize={20} bold>
                    Cart
                </Text>
            </Center>

            {/* If Cart is empty */}
            {/* <CartEmpty/> */}

            {/* CART ITEMS */}
            <ScrollView showsHorizontalScrollIndicator={false}>
                <CartItems/>
                {/* button */}
                <Center mt={5}>
                    <HStack 
                        rounded={50} 
                        justifyContent="space-between" 
                        bg={Colors.white} 
                        shadow={2} 
                        w="90%" 
                        pl={5} 
                        h={45} 
                        alignItems="center"
                        >
                        <Text>Total</Text>
                        <Button px={10} h={45} rounded={50} bg={Colors.main} _text={{
                            color:Colors.white,
                            fontWeight:"semibold",

                        }}>$321</Button>
                    </HStack>
                </Center>

                {/* Checkout */}

                 <Center px={5}>
                    <ButtonNew onPress={() => navigation.navigate("Shipping")}  bg={Colors.black} color={Colors.white} mt={10} >
                        CHECKOUT
                    </ButtonNew>
                 </Center>       
            </ScrollView>
        </Box>
  )
}

export default CartScreen
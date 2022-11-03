import { Box, Center, FormControl, Text, ScrollView, VStack, Input, HStack } from 'native-base'
import React from 'react'
import Colors from '../Color'
import ButtonNew from '../Components/ButtonNew'
import {Ionicons, FontAwesome} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const paymentMethod = [
    {
        image: require("../assets/PayPal"),
        alt: "paypal",
        icon:"Ionicons"
    },

    {
        image: "discover.png",
        alt: "discover",
        icon:"fontAwesome"
    },

    {
        image: require("../assets/MasterCard"),
        type: "googlepay",
        icon:"fontAwesome"
    }


]

const Payment = () => {

const navigation = useNavigation()

    return (
        <Box flex={1} safeArea bg={Colors.main} py={5}>
        {/* Header */}
            <Center pb={15}>
                <Text color={Colors.white} fontSize={14} bold>
                    PAYMENT METHOD
                </Text>
            </Center>

            {/* SELECTION */}
            <Box h='full' bg={Colors.subGreen} px={5}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <VStack space={6} mt={5}>

                    {paymentMethod.map((i, index) => (
                        <HStack
                        key={index} 
                        alignItems="center"
                        bg={Colors.white} 
                        py={1} 
                        px={3}
                        justifyContent="space-between" 
                        rounded={10}
                    >

                    <Box>
                        <Image 
                        source={i.image}
                        alt={i.alt}
                        resizeMode="contain"
                        w={60}
                        h={50}
                         />  
                    </Box>
                    {i.icon === "Ionicons" ? 
                    <Ionicons 
                        name="checkmark-circle" 
                        size={30} 
                        color={Colors.main}/> : 
                    <FontAwesome
                        name="circle-thin" 
                        size={30} 
                        color={Colors.main}
                        />}
                    </HStack>
                    ))}
                    
                        <ButtonNew onPress={() => navigation.navigate("Placeorder")} bg={Colors.main} color={Colors.white} mt={5}>
                            CONTINUE
                        </ButtonNew>
                        
                    </VStack>
                </ScrollView>
            </Box>
        </Box>
  )
}

export default Payment
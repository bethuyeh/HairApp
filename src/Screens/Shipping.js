import { useNavigation } from '@react-navigation/native'
import { Box, Center, FormControl, Text, View, VStack } from 'native-base'
import React from 'react'
import Colors from '../Color'
import ButtonNew from '../Components/ButtonNew'

const ShippingInputs = [
    {
        label: "ENTER CITY",
        type: "text"
    },

    {
        label: "ENTER COUNTRY",
        type: "text"
    },

    {
        label: "ENTER POSTAL CODE",
        type: "text"
    },

    {
        label: "ENTER ADDRESS",
        type: "text"
    },

    {
        label: "ENTER CITY",
        type: "text"
    },


]

const Shipping = () => {

    const navigation = useNavigation()

    return (
        <Box flex={1} safeArea bg={Colors.main} py={5}>
        {/* Header */}
            <Center pb={15}>
                <Text color={Colors.white} fontSize={14} bold>
                    DELIVERY ADDRESS
                </Text>
            </Center>

            {/* Inputs */}
            <Box h='full' bg={Colors.white} px={5}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <VStack space={6} mt={5}>

                    {ShippingInputs.map((i, index) => (
                        <FormControl key = {index}>
                            <FormControl.Label 
                            _text={{
                                fontSize:"12px",
                                fontWeight:"bold"
                            }}>
                                {i.label}
                            </FormControl.Label>

                            <Input
                                borderWidth={0.2}
                                borderColor={Colors.main}
                                bg={Colors.subGreen}
                                py={4}
                                type={i.type}
                                color={Colors.main}
                                _focus={{
                                    bg: Colors.subGreen,
                                    borderWidth: 1,
                                    borderColor: Colors.main
                                }}

                            />
                        </FormControl>
                        ))}
                        <ButtonNew  onPress={() => navigation.navigate("Checkout")} bg={Colors.main} color={Colors.white} mt={5}>
                            CONTINUE
                        </ButtonNew>
                    </VStack>
                </ScrollView>
            </Box>
        </Box>
  )
}

export default Shipping
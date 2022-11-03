import { Center, Text, View } from 'native-base'
import React from 'react'

const OrderInfo = ({icon, title, subTitle, text, success, danger}) => {
    return (
        <Center 
            bg={Colors.white} 
            w={200} 
            py={2} 
            rounded={10} 
            shadow={4} 
            mb={4} 
            ml={5} 
            mr={10} 
            px={4}>
            <Center 
                bg={Colors.main} 
                w={60} h={60} 
                rounded='full'>
                {icon}
            </Center>
            <Heading  
                bold fontSize={12} 
                inTruncated 
                mt={3} 
                mb={2} 
                color={Colors.black}>
            </Heading>
            <Text fontSize={13} textAlign='center' italic color={Color.black}>
                {text}
                {/* Status */}
                {success && (
                    <Center py={2} mt={2} rounded={5} w="full" bg={Colors.blue}>
                        <Text fontSize={12} color={Colors.white}>
                            Paid on June 7 2021
                        </Text>
                    </Center>
                )}

                {danger && (
                    <Center py={2} mt={2} rounded={5} w="full" bg={Colors.blue}>
                        <Text fontSize={12} color={Colors.white}>
                            Not Delivered
                        </Text>
                    </Center>
                )}
            </Text>
        </Center>
  )
}

export default OrderInfo
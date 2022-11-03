import { Center, Heading, View } from 'native-base'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Message = ({bg, color, children, size}) => {
  return (
    <Center bg={bg} p={4} rounded={5} >
        <Text color={color} fontSize={size} bold={bold}>{children}</Text>
    </Center>
  )
}

export default Message
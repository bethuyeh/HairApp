import { Image, Box, Heading, Input, VStack, Button, Pressable, Text} from 'native-base'
import React from 'react'
import Colors from "../Color"
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import {FontAwesome} from "@expo/vector-icons"


const LoginScreen = (navigation) => {
    return (
        <Box flex={1} bg={Colors.black}>
            <Image
                flex={1}
                alt="Logo"
                resizeMode="cover"
                size="lg"
                w="full"
                source={require("../../assets/Cover.jpg")}
            />

            <Box
                w="full"
                h="full"
                position="absolute"
                top="0"
                px="6"
                justifyContent="center"
                bg="blue"
            >

            <Heading color="white" fontSize='28px'>SIGN UP</Heading>
            <VStack space={5} pt="6">

            
                {/* USERNAME */}
                <Input
                    InputLeftElement = {
                        <FontAwesome name="user" size={20} color={Colors.white} />
                    }
                    variant="underlined"
                    placeholder="Your Name"
                    w="70%"
                    color={Colors.main}
                    borderBottomColor={Colors.underline}
                />

                <Input
                    InputLeftElement = {
                        <MaterialIcons name="email" size={20} color={Colors.main} />
                    }
                    variant="underlined"
                    placeholder="user@gmail.com"
                    w="70%"
                    color={Colors.main}
                    borderBottomColor={Colors.underline}
                />

                <Input
                    InputLeftElement = {
                        <Ionicons name="eye" size={28} color={Colors.main} />
                    }
                    variant="underlined"
                    placeholder="********"
                    w="70%"
                    type="password"
                    color={Colors.white}
                    borderBottomColor={Colors.underline}
                />
            </VStack>
            <Button 
                _pressed={{
                    bg: Colors.main,
                }}
                my={30} 
                w="40" 
                rounded={50} 
                bg={Colors.main}
                onPress={() => navigation.navigate("Bottom ")}
            >SIGN IN
            </Button>

            <Pressable mt={4} onPress={() => navigation.navigate("Register")}>
                <Text color={Colors.white}>SIGN UP</Text>
            </Pressable>
            </Box>

        </Box>
  )
}

export default LoginScreen
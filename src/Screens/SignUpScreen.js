import { Box, Heading, Center, VStack, FormControl, Input, Button, Text, Link } from 'native-base'
import React from 'react'

const SignUpScreen = () => {
  return <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading size="lg" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="semibold">
          Welcome
        </Heading>
        <Heading mt="1" color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="medium" size="xs">
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <Button 
              mt="2" 
              bg="cyan.500"   
              _text={{
                    color: "white",
                    fontWeight: '600'
                  }}>
            Sign up
          </Button>

          <Text>
              
                <Link>
                  Back to Sign in{" "}
                </Link>
              </Text>
        </VStack>
      </Box>
    </Center>;
};

export default SignUpScreen
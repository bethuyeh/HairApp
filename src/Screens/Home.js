import { Box, Text, HStack, VStack, Image, ScrollView } from 'native-base'
import React from 'react'
import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';
import Style from '../Components/Style';
import Bottom from '../Components/Bottom';
import Search from '../Components/Search';
import FirstHome from '../Components/FirstHome';
import SecondHome from '../Components/SecondHome';


const Home = () => {
  return (
    <Box  flex={1} safeAreaTop px={6}> 
      <HStack justifyContent='space-between'>
          <AntDesign name="arrowleft" size={24} color="#1AC0CC"/>
          <Text 
            fontSize="xl"
            color="#1AC0CC"
            bold
            borderColor="black"
          >Good morning Jane</Text>
          <Box bg="muted.200" borderColor="cyan.200" borderWidth="1" borderRadius="full" p={1} px={2}>
          <FontAwesome name="user" size={24} color="#1AC0CC" />
          </Box>
      </HStack>

      {/* Search bar */}
      <Search/>

        {/* Image */}
        <Box flex={1}  w="full" >
                <Image 
                style= {Style.image}
                mt={4}
                w="full"
                source={require("../../assets/Braids1.jpg")}
                alt="Logo"
                size="150"
                resizeMode="cover"
                />
            
            <HStack justifyContent="flex-end" mt={2}>
              <Text fontSize="md" bold color="" >See all</Text>
              <AntDesign name="arrowright" size={24} color="black" />
              
            </HStack>
            
            <FirstHome/>
            <SecondHome/>
                {/* Icons */}
                
                <Box>
                {/* <HStack mt="2">
                <Box mt='1' mr="3">
                  <Box borderColor="cyan.500" borderWidth="4" rounded="10%" p="2" px={3}>
                    <Image
                    p={3} 
                    mt={2}                
                    source={require("../../assets/saloncolored2.png")}
                    alt="Logo"
                    size="50"
                    resizeMode="cover"
                    />
                  </Box>
                  <Text
                    fontWeight="500"
                    textAlign="center"
                  >Saloons</Text>
                  </Box>
                  

                <Box mt='1' mr="3">
                <Box borderColor="cyan.500" borderWidth="4" rounded="10%" p="2" px={3}>
                  <Image   
                  p={2} 
                  mt={2}              
                  source={require("../../assets/saloncolored2.png")}
                  alt="Logo"
                  size="50"
                  resizeMode="cover"
                  />
                  
                </Box>
                <Text
                  fontWeight="500"
                  textAlign="center"
                >Stylists</Text>
                </Box>


                <Box mt='1' mr="3">
                <Box borderColor="cyan.500" borderWidth="4" rounded="10%" p="2" px={3}>
                  <Image   
                  p={2} 
                  mt={2}              
                  source={require("../../assets/shoppingcolored2.png")}
                  alt="Logo"
                  size="50"
                  resizeMode="cover"
                  />
                  
                </Box>
                <Text
                  fontWeight="500"
                  textAlign="center"
                >Vendors</Text>
                </Box>

                <Box mt='1' mr="3">
                <Box borderColor="cyan.500" borderWidth="4" rounded="10%" p="2" px={3}>
                  <Image   
                  p={2} 
                  mt={2}              
                  source={require("../../assets/piggybankcolored2.png")}
                  alt="Logo"
                  size="50"
                  resizeMode="cover"
                  />
                  
                </Box>
                <Text
                  fontWeight="500"
                  textAlign="center"
                >1k Services</Text>
                </Box>

                
                </HStack> */}

                {/* 0C757D */}

                
                {/* <HStack mt="2">
                <Box mt='1' mr="3">
                  <Box borderColor="cyan.500" borderWidth="4" rounded="10%" p="2" px={3}>
                    <Image
                    p={3} 
                    mt={2}                
                    source={require("../../assets/hairtype2.png")}
                    alt="Logo"
                    size="50"
                    resizeMode="cover"
                    />
                  </Box>
                  <Text
                    fontWeight="500"
                    textAlign="center"
                  >Hair Quiz</Text>
                  </Box>
                  

                <Box mt='1' mr="3">
                <Box borderColor="cyan.500" borderWidth="4" rounded="10%" p="2" px={3}>
                  <Image   
                  p={2} 
                  mt={2}              
                  source={require("../../assets/hairtutorial.png")}
                  alt="Logo"
                  size="50"
                  resizeMode="cover"
                  />
                  
                </Box>
                <Text
                  fontWeight="500"
                  textAlign="center"
                >Tutorials</Text>
                </Box>


                <Box mt='1' mr="3">
                <Box borderColor="cyan.500" borderWidth="4" rounded="10%" p="2" px={3}>
                  <Image   
                  p={2} 
                  mt={2}              
                  source={require("../../assets/worker.png")}
                  alt="Logo"
                  size="50"
                  resizeMode="cover"
                  />
                  
                </Box>
                <Text
                  fontWeight="500"
                  textAlign="center"
                >Advisory</Text>
                </Box>

                <Box mt='1' mr="3">
                <Box borderColor="cyan.500" borderWidth="4" rounded="10%" p="2" px={3}>
                  <Image   
                  p={2} 
                  mt={2}              
                  source={require("../../assets/newsreport.png")}
                  alt="Logo"
                  size="50"
                  resizeMode="cover"
                  />
                  
                </Box>
                <Text
                  fontWeight="500"
                  textAlign="center"
                >Articles</Text>
                </Box>
                </HStack> */}
              </Box>

                <Box  mt={4}      
                >
                
                  <Image 
                  style= {Style.image}
                  w="full"
                  source={require("../../assets/white-braids.jpg")}
                  alt="Logo"
                  size="125"
                  resizeMode="cover"
                  backgroundColor='transparent'/>
                </Box>   
                
                <Bottom safeAreaBottom/> 
        </Box>
        
    </Box>
  )
}

export default Home
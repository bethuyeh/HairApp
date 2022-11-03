import React from 'react'
import { FlatList, VStack } from 'native-base'

const OrderItems = () => {
  return (
    <FlatList 
        showsHorizontalScrollIndicator={false} 
        data={products.slice(0, 3)} 
        keyExtractor={(item) => item._id} 
        renderItem={({item}) => (
          <Pressable>
            <Box mb={3}>
                <HStack 
                    alignItems="center"
                    bg={Colors.white}
                    shadow={1}
                    rounded={10}
                    overflow="hidden"
                    >
                        <Center w="25%" bg={Colors.deepGray}>
                            <Image 
                                source={{uri: item.image}} 
                                alt={item.name} 
                                w="full" 
                                h={24} 
                                resizeMode="contain"

                                />
                        </Center>
                        <VStack w="60" px={2}>
                            <Text 
                                isTruncated 
                                color={Colors.black} 
                                bold 
                                fontSize={12}>
                                {item.name}
                            </Text>

                            <Text 
                                isTruncated 
                                color={Colors.lightBlack} 
                                mt={2}
                                bold>
                                ${item.price}
                            </Text>
                        </VStack>

                        <Center>
                            <Button 
                                bg={Colors.main} 
                                _pressed={{bg:Colors.main}}
                                _text={{
                                    color:Colors.white,
                                    
                                }}
                                >
                            5
                            </Button>
                        </Center>
                        
                    </HStack>
            </Box>
          </Pressable>)}
        >
      <Text>OrderItems</Text>
    </FlatList>
  )
}

export default OrderItems
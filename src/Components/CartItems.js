import { Text } from 'react-native-svg'
import {Box, Button, Center, HStack, Pressable} from 'native-base'
import React from 'react'
import { SwipeListView } from 'react-native-swipe-list-view'
import Products from './Products'

const Swiper = () => {
    <SwipeListView
    rightOpenValue = {-50}
    previewRowKey={0}
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data={product.slice(0.2)}
    renderHiddenItem={renderHiddenItems}
    renderItem={renderItems}
    showsVerticalScrollIndicator={false}
    />
}

const renderItems = (data) =>{
    <Pressable>
        <Box ml={6} mb={3}>
            <HStack 
                alignItems="center" 
                bg={Colors.white} 
                shadow={1} 
                rounded={10} 
                overflow="hidden"
            >
                <Center w="25" bg={Colors.deepGray}>
                    <Image 
                        source={{ uri: Data.item.image}} 
                        alt={data.item.image} 
                        w="full" 
                        h={24}
                        resizeMode="contain"
                        />
                </Center>
                <VStack w="60%" px={2} space={2}>
                    <Text isTruncated color={Colors.black} bold fontSize={10}>
                        {Data.item.name}
                    </Text>

                    <Text bold color={Colors.lightBlack}>
                        ${Data.item.price}
                    </Text>
                </VStack>

                <Center>
                    <Button bg={Colors.main} _pressed={{bg:Colors.main}} _text={{
                        color: Colors.white
                    }}>

                    </Button>
                </Center>
            </HStack>
        </Box>
    </Pressable>
}

const renderHiddenItems = (data) =>{
    <Pressable 
        w={50} 
        roundedTopRight={10} 
        roundedBottomRight={10} 
        h='88%' 
        ml='auto' 
        justifyContent="center" 
        bg={Colors.red}
    >

        <Center alignItems="center" space={2}>
            <FontAwesome 
                name="trash" 
                size={24} 
                color={Colors.white} 
                >
                <Text>
                    Item
                </Text>
            </FontAwesome>
        </Center>
    </Pressable>
}

const CartItems = () => {
  return (
    <Box mr={6}>
        <Swiper/>
    </Box>
  )
}

export default CartItems